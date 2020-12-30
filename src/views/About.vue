<template>
  <AppLayout>
    <AppLoader v-bind:active="loaderStatus"></AppLoader>
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h1 class="title">Lista de Premios</h1>
              <h2 class="subtitle">Revise la lista de premios obtenidos</h2>
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
        <div class="columns is-search">
          <div class="column is-12">
            <div class="field is-horizontal">
              <div class="field-body">
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
                <div class="field is-grouped is-grouped-right btn__search">
                  <a class="button is-link is-normal" @click="searchAward"
                    >Buscar Premios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-128x128 column-image">
              <!-- <img v-bind:src="user.photoUrl" /> -->
              <img src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
            <hr>
            <p class="column-info is-bold">Hola, {{user.name}} {{user.lastName}}</p>
            <p class="column-info">Número {{user.documentType}} {{user.document}}</p>
            <p class="column-info">Dirección, {{user.address}}</p>
            <p class="column-info">Cumpleaños, {{user.birthDate}}</p>
            <hr>
            <p class="column-info">Cantidad de Premios:  &nbsp;<strong>{{calculateAward(awardList)}}</strong></p>
          </div>
          <div class="column">
             <div class="columns is-multiline is-calendar">
          <div
            class="column is-month is-one-third"
            v-for="(item, index) in monthList"
            :key="index"
            v-bind:class="{ 'is-active': item.active }"
          >
            <span> {{ item.name }}</span>
            <div
              class="content-award"
              v-for="(element, ind) in awardList[item.name] || []"
              :key="ind"
            >
              <div
                class="ic-award"
                @click="showInfoModal(element, item, 1)"
              ></div>
            </div>
          </div>
        </div>
          </div>
        </div>
       
      </div>
    </section>

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
                  <strong>Detalle de Premio</strong>
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
                    <div class="field">
                      <label class="label">Comentario</label>
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          v-bind:value="modal.data.comentary"
                        />
                      </div>
                    </div>
                  </fieldset>
                  <br />
                  <div class="buttons">
                    <!-- <button
                      class="button is-facebook"
                      @click="shareSocial(modal, 1)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon
                          :icon="{ prefix: 'fab', iconName: 'facebook-f' }"
                        />
                      </span>
                      &nbsp; Facebook
                    </button>
                    <button
                      class="button is-twitter"
                      @click="shareSocial(modal, 2)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon
                          :icon="{ prefix: 'fab', iconName: 'twitter' }"
                        />
                      </span>
                      &nbsp; Twitter
                    </button> -->
                    <button
                      class="button is-twitter"
                      @click="shareSocial(modal, 2)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon
                          :icon="{ prefix: 'fa', iconName: 'download' }"
                        />
                      </span>
                      &nbsp; Descargar certificado
                    </button>
                    <!-- <button
                      class="button is-whatsapp"
                      @click="shareSocial(modal, 3)"
                    >
                      <span class="icon is-small">
                        <font-awesome-icon
                          :icon="{ prefix: 'fab', iconName: 'whatsapp' }"
                        />
                      </span>
                      &nbsp; Whatsapp
                    </button> -->
                  </div>
                  <hr />
                  <fieldset disabled>
                    <label class="label">Responsable</label>
                    <br />
                    <div class="field is-grouped">
                      <div class="control">
                        <div class="field-body">
                          <figure class="image is-64x64">
                            <img v-bind:src="modal.data.user.photoUrl" />
                          </figure>
                        </div>
                      </div>
                      <div class="control is-expanded">
                        <div class="field">
                          <label class="label">Nombre</label>
                          <div class="control">
                            <input
                              class="input"
                              type="email"
                              v-bind:value="modal.data.user.name"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="field is-grouped">
                      <div class="control is-expanded">
                        <div class="field">
                          <label class="label">Tipo documento</label>
                          <div class="control">
                            <input
                              class="input"
                              type="email"
                              v-bind:value="modal.data.user.documentType"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="control is-expanded">
                        <div class="field">
                          <label class="label">Número documento</label>
                          <div class="control">
                            <input
                              class="input"
                              type="email"
                              v-bind:value="modal.data.user.document"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <br />
                  <div class="buttons is-right">
                    <!-- <button
                      class="button is-success"
                      @click="setEditAction(modal.data)"
                    >
                      Aprobar
                    </button> -->
                    <button class="button" @click="hideInfoModal()">
                      Cerrar
                    </button>
                  </div>
                </div>
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
    <div class="certification-about">
      <div ref="printMe" v-bind:class="{ 'is-hidden': !showCertification }">
        <AppCertification
          v-bind:data="certification.data"
          v-bind:detail="certification.detail"
        />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/app-layout.vue";
import AppLoader from "@/components/app-loader.vue";
import AppCertification from "@/components/app-certification.vue";
import ownerServices from "@/services/ownerServices";
import helpers from "@/util/helpers";
import { ModelSelect } from "vue-search-select";

export default {
  name: "award",
  components: {
    AppLayout,
    AppLoader,
    AppCertification,
    ModelSelect,
  },
  data() {
    const yearList = helpers.generateArrayOfYears();
    const monthList = helpers.generateMonths();
    return {
      showCertification: false,
      showSlide: false,
      loaderStatus: false,
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
      certification: {
        data: { user: {} },
        detail: {},
      },
      yearList,
      monthList,
      awardList: {},
      stateInfoModal: 0,
      pagesNumber: 0,
      currentPage: 1,
      selectedNumber: 0,
      showNotification: false,
    };
  },
  created() {
    this.searchAward();
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    async shareSocial(payload, socialType) {
      const { data, item } = payload;
      this.showCertification = true;
      this.loaderStatus = true;
      this.certification = {
        data: {...data, month: item.name},
        detail: {
          fullName: 'Eli tanta'
        }
      }
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL'
      }
      const result = await this.$html2canvas(el, options);

      this.loaderStatus = false;
      this.showCertification = false;
      let a = document.createElement("a");
      a.setAttribute('download', 'certificado.png');
      a.setAttribute('href', result);
      a.click();

    },
    calculateAward(payload){
      let awardAmount = 0;
      for (const key in payload) {
        // if (Object.hasOwnProperty.call(object, key)) {
          const element = payload[key];
          awardAmount += element.length;
      }
      return awardAmount
    },
    searchAward() {
      ownerServices
        .getAwardByWorker({
          userId: 23,
          year: this.awardForm.idYear,
        })
        .then((response) => {
          let detail = {};
          response.forEach((item) => {
            detail[item.month] = item.details || [];
          });
          this.awardList = detail;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    hideInfoModal() {
      this.stateInfoModal = 0;
    },
    showInfoModal(payload, item, modalType) {
      this.freeList = [];
      this.stateInfoModal = modalType;
      this.modal.data = JSON.parse(JSON.stringify(payload));
      this.modal.item = JSON.parse(JSON.stringify(item));
    },
  },
};
</script>
<style scoped lang="scss">
.column-image{
  margin-bottom: 20px;
}
.column-info{
  font-size: 20px;
  padding-bottom: 10px;
  &.is-bold{
    font-weight: 600;
  }
}
.certification-about{
  padding: 0 5%;
}
.is-hidden{
  display: none;
}
@media print{
 .showOnPrint{
   display:block !important;
 }
}
.is-facebook {
  background-color: #3b5999;
  color: white;
}
.is-twitter {
  background-color: #55acee;
  color: white;
}
.is-whatsapp {
  background-color: #25d366;
  color: white;
}
.content-award {
  width: 25%;
}
.ic-award {
  cursor: pointer;
  background-image: url(../assets/award.svg);
  width: 100%;
  background-size: cover;
  height: 0;
  padding: 0;
  padding-bottom: 100%;
  margin-bottom: 10px;
  &:hover {
    filter: drop-shadow(1px 2px 2px rgb(121, 118, 118));
  }
}
.columns {
  &.is-search {
    margin-bottom: 50px;
  }
  &.is-calendar {
    margin: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 10px;
  }
}
.is-month {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-bottom: 0.1px rgb(175, 173, 173) solid;
  padding: 50px;
  min-height: 10rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &.is-active {
    border: 3px solid #5d2cb9;
    span {
      color: #5d2cb9;
    }
  }

  span {
    color: rgb(117, 112, 112);
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 15px 20px;
    font-weight: 500;
  }
}
.content-close {
  &::before,
  &::after {
    background-color: black;
  }
  &:hover {
    background-color: #0a0a0a17;
  }
  z-index: 900;
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
</style>
