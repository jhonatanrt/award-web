<template>
  <AppLayout>
    <div class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-two-thirds">
              <h1 class="title">Lista de trabajadores</h1>
              <h2 class="subtitle">
                Seleccione a sus mejores trabajadores para reconocerlo o
                premiarlo de acuerdo a su categoría.
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
    <section class="section is-storyworlds has-background is-medium">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <div class="field is-grouped">
              <p class="control is-expanded">
                <input
                  class="input is-large"
                  type="text"
                  v-model="searchText"
                  placeholder="Escriba DNI, Nombre o Apellidos"
                />
              </p>
              <p class="control">
                <a class="button is-link is-large"> Buscar Trabajador </a>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3 is-2-widescreen">
            <div class="menu">
              <p class="menu-label">Filtrar por área</p>
              <ul class="menu-list">
                <li>
                  <a
                    class="is-active"
                    data-action="filter"
                    data-group=""
                    href="/library"
                    >Todos</a
                  >
                </li>
                <li>
                  <a data-action="filter" data-group="2-4" href="/library/2-4"
                    >Área N1</a
                  >
                </li>
                <li>
                  <a data-action="filter" data-group="4-6" href="/library/4-6"
                    >Área N2</a
                  >
                </li>
                <li>
                  <a data-action="filter" data-group="6-9" href="/library/6-9"
                    >Área N3</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="column is-9 is-10-widescreen">
            <div class="columns is-multiline" id="grid">
              <div
                class="column is-6 is-4-widescreen is-flex"
                v-for="(element, index) in fake"
                :key="index"
              >
                <div
                  class="card is-storyworld"
                  @click="selectOption(element)"
                  v-bind:class="{ active: element.active }"
                >
                  <a class="card-header">
                    <div
                      class="card-image"
                      v-bind:style="`background-image: url('${element.photoUrl}')`"
                    ></div>
                  </a>
                  <div class="card-body">
                    <a>
                      <div class="card-title">
                        {{ element.name }} {{ element.lastName }}
                      </div>
                    </a>
                    <div class="card-meta">
                      <!-- <i class="icon-user"></i>6-9 years -->
                      <span>{{ element.documentType }} :</span>
                      {{ element.document }}
                    </div>
                    <div class="card-meta">
                      <!-- <i class="icon-user"></i>6-9 years -->
                      <span>Cumpleaños :</span> {{ element.birthDate }}
                    </div>
                    <!-- <div class="card-description">
                      <p>
                        Tate, a young boy on the autism spectrum, loves watching
                        tops spin. One day, he realizes that watching them takes
                        him into a different world.
                      </p>
                    </div> -->
                  </div>
                  <div class="card-footer">
                    <a class="button is-primary is-outlined">Seleccionar</a>
                  </div>
                </div>
              </div>
            </div>
            <nav
              class="pagination is-right"
              role="navigation"
              aria-label="pagination"
            >
              <a class="pagination-previous">Anterior</a>
              <a class="pagination-next">Siguiente</a>
              <ul class="pagination-list">
                <li>
                  <a class="pagination-link is-current" aria-label="Goto page 1"
                    >1</a
                  >
                </li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 3">3</a>
                </li>
                <li>
                  <a
                    class="pagination-link"
                    aria-label="Page 4"
                    aria-current="page"
                    >4</a
                  >
                </li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 5">5</a>
                </li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li>
                  <a class="pagination-link" aria-label="Goto page 8">8</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>

    <nav class="navbar is-fixed-bottom navbar__option" v-if="availableButton">
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item"> Trabajadores Seleccionados </a>
          <a class="navbar-item">
            <span
              class="tag is-link is-light is-large is-spaced"
              v-for="(element, index) in selectedList"
              :key="index"
            >
              {{ element.name }} {{ element.lastName }}
              <button class="delete"></button>
            </span>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field">
              <p class="control">
                <a
                  class="button is-primary is-medium"
                  @click="showRegisterModal"
                >
                  <span class="icon">
                    <i class="far fa-check-circle"></i>
                  </span>
                  <span>APROBAR</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div
      class="modal"
      v-bind:class="{ 'is-active': stateRegisterModal }"
      v-if="stateRegisterModal"
    >
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Registro de Premiación</p>
          <button
            class="delete"
            aria-label="close"
            @click="hideRegisterModal"
          ></button>
        </header>
        <form @submit.prevent="handleSubmit">
          <section class="modal-card-body">
            <div class="field-form">
              <fieldset v-for="(element, index) in selectedList" :key="index">
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Trabajador</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="e.g. Partnership opportunity"
                          v-model="awardForm.data[index].name"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Comentarios</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <div class="control">
                        <textarea
                          class="textarea"
                          placeholder="Detalles de comentarios"
                          v-model="awardForm.data[index].comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </fieldset>
            </div>
            <fieldset>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Categoría</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control is-expanded">
                      <div class="select is-fullwidth">
                        <select v-model="awardForm.idCategory">
                          <option
                            v-for="(item, index) in categoryList"
                            :key="index"
                            v-bind:value="item.categoryId"
                          >
                            {{ item.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Mes</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control is-expanded">
                      <div class="select is-fullwidth">
                        <select v-model="awardForm.idMonth">
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
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Año</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control is-expanded">
                      <div class="select is-fullwidth">
                        <select v-model="awardForm.idYear">
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
                </div>
              </div>
            </fieldset>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-link" type="submit">APROBAR</button>
            <button class="button" @click="hideRegisterModal">CANCELAR</button>
          </footer>
        </form>
      </div>
    </div>
  </AppLayout>
</template>


<script>
import AppLayout from "@/components/app-layout.vue";
import ownerServices from "@/services/ownerServices";
import helpers from "@/util/helpers";

export default {
  name: "shopping",
  components: {
    AppLayout,
  },
  created() {
    this.fecthData();
  },
  computed: {},
  data() {
    const yearList = helpers.generateArrayOfYears();
    const monthList = helpers.generateMonths();

    return {
      awardForm: {
        idCategory: 1,
        idMonth: monthList.find((item) => item.active).name,
        idYear: yearList.find((item) => item.active).name,
        data: [],
      },
      selectedList: [],
      yearList,
      monthList,
      searchText: "",
      stateRegisterModal: false,
      // stateRegisterModal: false,
      fake: [],
      categoryList: [],
      // fake: [
      //   {
      //     userId: 3,
      //     documentType: "DNI",
      //     document: "88888888",
      //     name: "Jhonny",
      //     lastName: "Tanta",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 4,
      //     documentType: "DNI",
      //     document: "33333333",
      //     name: "Jhonny",
      //     lastName: "Tanta",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 5,
      //     documentType: "DNI",
      //     document: "55555555",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 6,
      //     documentType: "DNI",
      //     document: "77777888",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 7,
      //     documentType: "DNI",
      //     document: "77777888",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 8,
      //     documentType: "DNI",
      //     document: "667777777",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 9,
      //     documentType: "DNI",
      //     document: "988888888",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 10,
      //     documentType: "DNI",
      //     document: "55555666",
      //     name: "Jhonny",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      //   {
      //     userId: 11,
      //     documentType: "DNI",
      //     document: "55555666",
      //     name: "Jhonny6",
      //     lastName: "Duro",
      //     birthDate: "1991-11-26",
      //     address: "calle sueore viva",
      //     photoUrl:
      //       "https://scontent.flim19-1.fna.fbcdn.net/v/t1.0-1/p200x200/22228337_10210098810966063_5576753613056883978_n.jpg?_nc_cat=106&ccb=2&_nc_sid=7206a8&_nc_eui2=AeGuNW8frFqop6iVCUJI2pZhC_I7NLS-dZQL8js0tL51lD-t1LD0KWCQJBsKgSjefKE&_nc_ohc=kA5cr6yXnigAX8RkDv0&_nc_ht=scontent.flim19-1.fna&tp=6&oh=0fe9c767ca1481061accd3284db959fd&oe=5FDF8054",
      //   },
      // ],
      availableButton: false,
      selectedNumber: 0,
      // categoryList: [
      //   {
      //     categoryId: 1,
      //     name: "Mejor Vendedor Del Mes",
      //   },
      //   {
      //     categoryId: 2,
      //     name: "Mejor Equipo Del Mes",
      //   },
      // ],
    };
  },
  methods: {
    fecthData() {
      ownerServices
        .getWorker({
          limit: 20,
          offset: 0,
          userId: 1,
        })
        .then((response) => {
          this.fake = response;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });

      ownerServices
        .getCategory()
        .then((response) => {
          this.categoryList = response;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
    },
    searchWorker() {
      ownerServices
        .getWorker({
          limit: 20,
          offset: 0,
          userId: 1,
          name: this.searchText,
        })
        .then((response) => {
          this.fake = response;
        })
        .catch((error) => {
          throw new Error(`API ${error}`);
        });
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
      if (detailShow.length > 0) this.availableButton = true;
    },
    hideRegisterModal() {
      this.stateRegisterModal = false;

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
          const {idCategory, idMonth, idYear, data} = this.awardForm;
          const request = {
            categoryId: idCategory,
            month: idMonth,
            year: idYear,
            userId: 1,
            usersSelected: data.map(item => ({ userId: item.userId, comentary: item.comment}))
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
                this.showNotification = false
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
.field-form{
  max-height: 22rem;
  overflow-y: scroll; 
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
.card.is-storyworld {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 360px;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  width: 100%;
  overflow: hidden;
  transition-duration: 172ms;
  will-change: transform, box-shadow;

  &.active {
    border: 3px solid #5d2cb9;
  }
}

.card {
  background-color: transparent;
  box-shadow: none;
  color: #998da0;
  max-width: 100%;
  position: relative;
  cursor: pointer;
}
.card.is-storyworld .card-header {
  margin: 0;
  overflow: hidden;
  flex-direction: column;
}
.card-header {
  background-color: none;
  align-items: stretch;
  box-shadow: none;
  display: -ms-flexbox;
  display: flex;
}
.card.is-storyworld .card-image {
  border-radius: 10px 10px 0 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition-duration: 172ms;
  will-change: transform;
}

.card-image {
  display: block;
  position: relative;
}
.card.is-storyworld .card-body {
  flex: 1;
  padding: 2rem 1.5rem;
}
.card.is-storyworld .card-footer {
  margin-top: -3rem;
  padding: 2rem 1.5rem;
}
.card-footer {
  background-color: none;
  border-top: none;
  align-items: stretch;
  display: -ms-flexbox;
  display: flex;
}
.card.is-storyworld .card-image:before {
  display: block;
  content: "";
  padding-bottom: 63.80597%;
}
</style>
