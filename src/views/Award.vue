<template>
  <AppLayout>
    <AppLoader v-bind:active="loaderStatus"></AppLoader>
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h1 class="title">Solicitudes de reconocimiento</h1>
              <h2 class="subtitle">
                Realice las aprobaciones o rechazo de las solicitudes.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="notification is-link is-light" v-if="showNotification">
      <button class="delete"></button>
      Registro Exitoso
    </div>
    <section class="section is-storyworlds has-background is-small">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <div class="field is-horizontal">
              <!-- <div class="field-label is-normal">
                <label class="label">From</label>
              </div> -->
              <div class="field-body">
                <!-- <div class="field">
                  <p class="control is-expanded">
                    <input
                      class="input"
                      type="text"
                      v-model="searchText"
                      v-on:keyup.enter="searchWorker"
                      placeholder="Escriba DNI, Nombre o Apellidos"
                    />
                  </p>
                </div> -->
                <div class="field">
                  <label class="label">Mes</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="awardForm.idMonth">
                        <option value="" disabled>Seleccione Mes</option>
                        <option
                          v-for="(item, index) in monthList"
                          :key="index"
                          v-bind:value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Año</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="awardForm.idYear">
                        <option value="" disabled>Seleccione Año</option>
                        <option
                          v-for="(item, index) in yearList"
                          :key="index"
                          v-bind:value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field">
                  <label class="label">Estado</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="awardForm.status">
                        <option val="" disabled>Seleccione Estado</option>
                        <option
                          v-for="(item, index) in statusList"
                          :key="index"
                          v-bind:value="item.id"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field is-grouped is-grouped-right btn__search">
                  <a class="button is-link is-normal" @click="searchWorker"
                    >Buscar Reconocimento
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12 is-12-widescreen">
            <table class="table is-fullwidth is-hoverable table__space">
              <thead>
                <tr>
                  <!-- <th style="width: 50px">
                  </th> -->
                  <th>Tipo de categoría</th>
                  <th>Mes</th>
                  <th>Año</th>
                  <th>Nombre de solicitante</th>
                  <th>Estado</th>
                  <th>Información</th>
                  <th>Presentación</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody v-if="fake.length > 0">
                <tr v-for="(element, index) in fake" :key="index">
                  <!-- <td style="width: 50px">
                    <input type="checkbox" />
                  </td> -->
                  <td>
                    <strong>{{ element.categoryName }}</strong>
                  </td>
                  <td>{{ element.month }}</td>
                  <td>{{ element.year }}</td>
                  <td>{{ element.nameRequest }}</td>
                  <td>{{ getStatus(element.status) }}</td>
                  <td>
                    <div class="buttons">
                      <button
                        class="button is-info"
                        @click="showInfoModal(element, element.status ? 2 : 1)"
                      >
                        Visualizar
                      </button>
                    </div>
                  </td>
                  <td>
                    <div class="buttons" v-if="element.status === 1">
                      <button
                        class="button is-info"
                        @click="showSlideModal(element)"
                      >
                        Ver
                      </button>
                    </div>
                  </td>
                  <td>
                    <div class="buttons" v-if="element.status === 0">
                      <button
                        class="button is-success"
                        @click="showActionModal(1, element)"
                      >
                        Aprobar
                      </button>
                      <!-- <button
                        class="button is-danger"
                        @click="showActionModal(2, element)"
                      >
                        Rechazar
                      </button> -->
                    </div>
                    <div class="buttons" v-if="element.status !== 0">
                      <button
                        class="button is-warning"
                        title="Disabled button"
                        disabled
                      >
                        Sin Acciones
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
              <div v-if="fake.length === 0" class="table__empty">
                <span>No hay registros</span>
              </div>
            </table>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal"
      v-bind:class="{ 'is-active': stateActionModal }"
      v-if="stateActionModal"
    >
      <div class="modal-background" @click="hideActionModal()"></div>
      <div class="modal-content">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content modal--content">
                <strong>Hola, {{ modal.userName }}</strong>
                <p>
                  ¿Está seguro que desea <strong>{{ modal.detail }}</strong> las
                  solicitud?
                </p>
              </div>
              <div class="buttons is-right">
                <button
                  class="button is-success"
                  @click="setAction(modal.statusType, modal.data)"
                >
                  Aceptar
                </button>
                <button class="button" @click="hideActionModal()">
                  Cancelar
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideActionModal()"
      ></button>
    </div>

    <div
      class="modal"
      v-bind:class="{ 'is-active': stateInfoModal === 1 }"
      v-if="stateInfoModal === 1"
    >
      <div class="modal-background" @click="hideInfoModal()"></div>
      <div class="modal-content">
        <div class="box">
          <fieldset>
            <article class="media">
              <div class="media-content">
                <div class="content modal--content">
                  <strong>Detalle de solicitud</strong>
                  <hr />
                  <fieldset disabled>
                    <div class="field">
                      <label class="label">Tipo Categoría</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          v-bind:value="modal.data.categoryName"
                        />
                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="field">
                          <label class="label">Año</label>
                          <div class="control">
                            <input
                              class="input"
                              type="email"
                              v-bind:value="modal.data.year"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="control">
                        <div class="field">
                          <label class="label">Mes</label>
                          <div class="control">
                            <input
                              class="input"
                              type="email"
                              v-bind:value="modal.data.month"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Responsable</label>
                      <div class="control">
                        <input
                          class="input"
                          type="email"
                          v-bind:value="modal.data.nameRequest"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <br />
                  <label class="label has-button"
                    >Lista de Trabajadores
                    <button class="button is-warning" @click="addWorker()">
                      <span class="icon is-small">
                        <font-awesome-icon icon="user-plus" />
                      </span>
                    </button>
                  </label>
                  <div class="field-form">
                    <div class="columns is-desktop" v-if="freeList.length > 0">
                      <div class="column is-four-fifths-desktop">
                        <fieldset>
                          <div class="field is-horizontal">
                            <div class="field-label is-normal">
                              <label class="label">Nombres</label>
                            </div>
                            <div class="field-body">
                              <div class="field">
                                <div class="control">
                                  <model-select
                                    :options="freeList"
                                    v-model="userForm"
                                    placeholder="select item"
                                  >
                                  </model-select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="field is-horizontal">
                            <div class="field-label is-normal">
                              <label class="label">Detalle</label>
                            </div>
                            <div class="field-body">
                              <div class="field">
                                <div class="control">
                                  <textarea
                                    class="textarea"
                                    v-model="userForm.comentary"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div class="column">
                        <div class="buttons is-right">
                          <button class="button is-success" @click="addUser()">
                            <span class="icon is-small">
                              <font-awesome-icon icon="check" />
                            </span>
                            &nbsp; Agregar
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <div
                      v-for="(item, index) in modal.data.usersSelected"
                      :key="index"
                    >
                      <div class="columns is-desktop">
                        <div class="column is-four-fifths-desktop">
                          <fieldset>
                            <div class="field is-horizontal">
                              <div class="field-label is-normal">
                                <label class="label">Nombres</label>
                              </div>
                              <div class="field-body">
                                <div class="field">
                                  <div class="control">
                                    <input
                                      class="input"
                                      type="text"
                                      v-bind:value="item.userInfo.name"
                                      disabled
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field is-horizontal">
                              <div class="field-label is-normal">
                                <label class="label">Foto</label>
                              </div>
                              <div class="field-body">
                                <figure class="image is-64x64">
                                  <img v-bind:src="item.userInfo.photoUrl" />
                                </figure>
                              </div>
                            </div>
                            <div class="field is-horizontal">
                              <div class="field-label is-normal">
                                <label class="label">Detalle</label>
                              </div>
                              <div class="field-body">
                                <div class="field">
                                  <div class="control">
                                    <textarea
                                      class="textarea"
                                      v-model="item.comentary"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div class="column">
                          <div class="buttons is-right">
                            <button
                              class="button is-danger"
                              @click="deleteCurrentWorker(item)"
                            >
                              <span class="icon is-small">
                                <font-awesome-icon icon="trash" />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div class="buttons is-right">
                    <button
                      class="button is-success"
                      @click="setEditAction(modal.data)"
                    >
                      Aprobar
                    </button>
                    <!-- <button
                      class="button is-danger"
                      @click="showActionModal(2, element)"
                    >
                      Rechazar
                    </button> -->
                    <button class="button" @click="hideInfoModal()">
                      Cerrar
                    </button>
                  </div>
                </div>
                <!-- <div class="buttons is-right">
                  <button class="button is-success" @click="setAction(modal.statusType, modal.data)">Aceptar</button>
                  <button class="button" @click="hideActionModal()">Cancelar</button>
                </div> -->
              </div>
            </article>
          </fieldset>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideInfoModal()"
      ></button>
    </div>

    <div
      class="modal"
      v-bind:class="{ 'is-active': stateInfoModal === 2 }"
      v-if="stateInfoModal === 2"
    >
      <div class="modal-background" @click="hideInfoModal()"></div>
      <div class="modal-content">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content modal--content">
                <strong>Detalle de solicitud</strong>
                <hr />
                <fieldset disabled>
                  <div class="field">
                    <label class="label">Tipo Categoría</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        v-bind:value="modal.data.categoryName"
                      />
                    </div>
                  </div>
                  <div class="field is-grouped">
                    <div class="control">
                      <div class="field">
                        <label class="label">Año</label>
                        <div class="control">
                          <input
                            class="input"
                            type="email"
                            v-bind:value="modal.data.year"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="control">
                      <div class="field">
                        <label class="label">Mes</label>
                        <div class="control">
                          <input
                            class="input"
                            type="email"
                            v-bind:value="modal.data.month"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Responsable</label>
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        v-bind:value="modal.data.nameRequest"
                      />
                    </div>
                  </div>
                  <br />
                  <label class="label has-button">Lista de Trabajadores </label>
                  <div class="field-form">
                    <div
                      v-for="(item, index) in modal.data.usersSelected"
                      :key="index"
                    >
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Nombres</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <div class="control">
                              <input
                                class="input"
                                type="text"
                                v-bind:value="item.userInfo.name"
                                disabled
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Foto</label>
                        </div>
                        <div class="field-body">
                          <figure class="image is-64x64">
                            <img v-bind:src="item.userInfo.photoUrl" />
                          </figure>
                        </div>
                      </div>
                      <div class="field is-horizontal">
                        <div class="field-label is-normal">
                          <label class="label">Detalle</label>
                        </div>
                        <div class="field-body">
                          <div class="field">
                            <div class="control">
                              <textarea
                                class="textarea"
                                v-model="item.comentary"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </fieldset>
                <div class="buttons is-right">
                  <button class="button" @click="hideInfoModal()">
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="hideInfoModal()"
      ></button>
    </div>
    <div class="content__slide" v-bind:class="{ 'is-hidden': !showSlide }">
      <button
        class="modal-close is-large content-close"
        aria-label="close"
        @click="hideSlide()"
      ></button>
      <AppSlideshow 
        v-bind:data="slideInfo.data"
        v-bind:detail="slideInfo.detail"
      ></AppSlideshow>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/app-layout.vue";
import AppLoader from "@/components/app-loader.vue";
import ownerServices from "@/services/ownerServices";
import helpers from "@/util/helpers";
import { ModelSelect } from "vue-search-select";
import AppSlideshow from "@/components/app-slideshow.vue";

export default {
  name: "award",
  components: {
    AppLayout,
    AppLoader,
    ModelSelect,
    AppSlideshow,
  },
  data() {
    const yearList = helpers.generateArrayOfYears();
    const monthList = helpers.generateMonths();

    return {
      showSlide: false,
      loaderStatus: false,
      slideInfo: {
        data: {},
        detail: [{ name: "" }],
      },
      awardForm: {
        idMonth: monthList.find((item) => item.active).name,
        idYear: yearList.find((item) => item.active).name,
        data: [],
        status: 0,
      },
      modal: {
        detail: "",
        userName: "Eli Tanta",
        data: [],
      },
      userForm: {
        value: "",
        text: "",
        userId: "",
        name: "",
        comentary: "",
      },
      selectedList: [],
      freeList: [],
      yearList,
      monthList,
      stateActionModal: false,
      stateInfoModal: 0,
      fake: [],
      statusList: [
        { id: "", name: "Todos" },
        { id: 0, name: "Pendiente" },
        { id: 1, name: "Aprobado", actionName: "Aprobar" },
        { id: 2, name: "Rechazado", actionName: "Rechazar" },
      ],
      pagesNumber: 0,
      currentPage: 1,
      categoryList: [],
      availableButton: false,
      selectedNumber: 0,
      showNotification: false,
    };
  },
  created() {
    this.fecthData();
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    hideSlide(){
      this.showSlide = false;
    },
    nextPage(pageNumber) {
      ownerServices
        .getWorker({
          limit: 10,
          offset: 10 * (pageNumber - 1),
          userId: this.user.userId,
        })
        .then(({ pages, users }) => {
          this.fake = users;
          this.currentPage = pageNumber;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    showSlideModal(payload){
      this.slideInfo = {
        data: {
          title: payload.categoryName,
          month: payload.month
        },
        detail: payload.usersSelected.map(item => ({
          ...item.userInfo,
          comentary: item.comentary
        }))
      }
      this.showSlide = true;
    },
    fecthData() {
      ownerServices
        .getPendingRequest({
          userId: this.user.userId,
          month: this.awardForm.idMonth,
          year: this.awardForm.idYear,
        })
        .then((response) => {
          this.fake = response;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    getStatus(statusType) {
      const data = this.statusList.find((item) => item.id === statusType);
      return data.name;
    },
    searchWorker() {
      ownerServices
        .getPendingRequest({
          userId: this.user.userId,
          month: this.awardForm.idMonth,
          year: this.awardForm.idYear,
        })
        .then((response) => {
          this.fake = response;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    addUser() {
      try {
        const selectedUser = this.freeList.find(
          (element) => element.userId == this.userForm.value
        );

        const userTemp = {
          userInfo: selectedUser,
          userId: selectedUser.userId,
          photoUrl: selectedUser.photoUrl,
          comentary: this.userForm.comentary,
        };

        let dataTemp = [...this.modal.data.usersSelected];
        this.modal.data.usersSelected = [userTemp, ...dataTemp];
        this.freeList = [];
      } catch (error) {
        console.log(error);
      }
    },
    addWorker() {
      this.loaderStatus = true;
      ownerServices
        .getFreeWorkers({
          userId: this.user.userId,
        })
        .then((response) => {
          this.freeList = (response || [])
            .map((element) => ({
              ...element,
              value: element.userId,
              text: `${element.document} - ${element.name} ${element.lastName}`,
            }))
            .filter((item) => {
              const hasRepeat = this.modal.data.usersSelected.find(
                (element) => element.userId == item.userId
              );
              if (hasRepeat) return false;

              return true;
            });

          this.userForm.comentary = "";
          this.userForm.value = "";
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        })
        .finally(() => {
          this.loaderStatus = false;
        });
    },
    deleteCurrentWorker(payload) {
      let dataTemp = [...this.modal.data.usersSelected];
      this.modal.data.usersSelected = dataTemp.filter(
        (item) => item.userId !== payload.userId
      );
    },
    selectOption(element) {
      const dataTemp = [...this.fake];
      this.fake = dataTemp.map((item) => ({
        ...item,
        active:
          item.active && item.userId !== element.userId
            ? true
            : item.active
            ? false
            : item.userId === element.userId,
      }));

      const detailShow = this.fake.filter((item) => item.active);
      this.selectedList = detailShow;
      this.selectedNumber = detailShow.length;
      this.availableButton = detailShow.length > 0;
    },
    hideActionModal() {
      this.stateActionModal = false;
    },
    hideInfoModal() {
      this.stateInfoModal = 0;
    },
    hideRegisterModal() {
      this.stateRegisterModal = false;
    },
    showActionModal(statusType, payload) {
      this.stateActionModal = true;
      const data = this.statusList.find((item) => item.id === statusType);
      this.modal.detail = data.actionName;
      this.modal.statusType = statusType;
      this.modal.data = payload;
    },
    showInfoModal(payload, modalType) {
      this.freeList = [];
      this.stateInfoModal = modalType;
      this.modal.data = JSON.parse(JSON.stringify(payload));
    },
    setEditAction(payload) {
      this.loaderStatus = true;
      ownerServices
        .setRequestEditAction({
          data: [
            {
              awardId: payload.awardId,
              usersSelected: payload.usersSelected.map(
                ({ comentary, userId }) => ({ comentary, userId })
              ),
            },
          ],
        })
        .then((response) => {

          if (response) {
            this.hideInfoModal();
            this.searchWorker();
          }
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        })
        .finally(() => {
          this.loaderStatus = false;
        });
    },
    setAction(statusType, payload) {
      this.loaderStatus = true;
      ownerServices
        .setRequestEditAction({
          data: [
            {
              awardId: payload.awardId,
              usersSelected: payload.usersSelected.map(
                ({ comentary, userId }) => ({ comentary, userId })
              ),
            },
          ],
        })
        .then((response) => {
          if (response) {
            this.hideActionModal();
            this.searchWorker();
          }
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        })
        .finally(() => {
          this.loaderStatus = false;
        });
    },
    showRegisterModal() {
      this.awardForm.data = this.selectedList.map((item) => ({
        name: `${item.name} ${item.lastName}`,
        comment: "",
        userId: item.userId,
      }));

      this.stateRegisterModal = true;
    },
    registerAward() {
      this.stateRegisterModal = !this.stateRegisterModal;
      const dataTemp = [...this.fake];
      this.fake = dataTemp.map((item) => ({ ...item, active: false }));
      this.selectedList = [];
      this.selectedNumber = 0;
      this.availableButton = false;
    },
    handleSubmit(e) {
      this.submitted = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          const { idCategory, idMonth, idYear, data } = this.awardForm;
          const request = {
            categoryId: idCategory,
            month: idMonth,
            year: idYear,
            userId: this.user.userId,
            usersSelected: data.map((item) => ({
              userId: item.userId,
              comentary: item.comment,
            })),
          };

          ownerServices
            .saveAward(request)
            .then((response) => {
              this.stateRegisterModal = !this.stateRegisterModal;
              const dataTemp = [...this.fake];
              this.fake = dataTemp.map((item) => ({ ...item, active: false }));
              this.selectedList = [];
              this.selectedNumber = 0;
              this.availableButton = false;
              this.showNotification = true;
              setTimeout(() => {
                this.showNotification = false;
              }, 2000);
            })
            .catch((error) => {
              throw new Error(`API ${error}`);
            });
        }
      });
    },
  },
};
</script>
<style scoped lang="scss">
.content-close {
  &::before, &::after{
    background-color: black;
  }
  &:hover{
    background-color: #0a0a0a17;
  }
  z-index: 900;
}
.content__slide {
  display: inline-block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 800;
  right: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #f3f3f3;
}
.table__empty {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.modal--content {
  p {
    padding: 20px 0;
  }
}
.btn__search {
  align-items: flex-end;
}
.field-form {
  /* max-height: 22rem; */
  /* overflow-y: scroll; */
  margin-bottom: 40px;
  padding-top: 25px;
}
.is-spaced {
  margin-right: 15px;
}
.navbar__option {
  min-height: 6rem;
  box-shadow: 0 -1px 0 0 rgba(142, 81, 199, 0.3);
  will-change: min-height;
}
.section.is-medium {
  padding-top: 5rem;
}
.hero.is-primary.is-bold {
  background-image: linear-gradient(
    141deg,
    #5d2cb9 0%,
    #8e51c7 71%,
    #ae5fd2 100%
  );
}
.table__space {
  margin-top: 1.5rem;
  th {
    padding: 20px 10px 20px 15px;
    color: white;
    background-color: #3273dc;
  }
  td {
    padding: 25px 10px 25px 15px;
  }
}
table,
tr td {
  /* border: 1px solid red; */
}
tbody {
  display: block;
  height: 500px;
  overflow: auto;
}
thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
thead {
  /* width: calc(100% - 1em); */
}
table {
  width: 400px;
}
.has-button {
  display: flex;
  align-items: center;
  button {
    margin-left: 15px;
  }
}
.content figure {
  margin-left: 0;
}
.is-hidden{
  display: none;
}
</style>
