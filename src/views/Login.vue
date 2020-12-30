<template>
  <div class="modal is-active">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <form @submit.prevent="handleSubmit" class="box">
        <div class="field">
          <label for="" class="label">DNI</label>
          <div class="control ">
            <input
              type="text"
              placeholder="Documento de identidad"
              class="input"
              v-model="loginForm.document"
              required
            />
          </div>
        </div>
        <div class="field">
          <label for="" class="label">Contraseña</label>
          <div class="control ">
            <input
              placeholder="Escriba su clave"
              type="password"
              class="input"
              v-model="loginForm.password"
              required
            />
          </div>
        </div>
        <p class="help is-danger" v-if="isLoginError">Usuario no existe, intente nuevamente.</p>
        <br>
        <div class="buttons is-right">
          <button class="button is-success" type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
  </div>
</template>

<script>
import ownerServices from "@/services/ownerServices";
import CONSTANTS from "@/util/constants";

export default {
  name: "login",
  components: {},
  data() {
    document.title = "Award - Premia al mejor";

    return {
      isLoginError: false,
      loginForm: {
        document: '',
        password: ''
      }
    };
  },
  computed: {},
  methods: {
    closeModal() {
      this.$emit('setLogin', '')
    },
    handleSubmit(e) {
      this.$validator.validate().then((valid) => {
        if (valid) {
          const { document, password } = this.loginForm;
          const request = { document, password };

        this.$store.dispatch('login', {document, password})
          .then((response) => {
            const data = CONSTANTS.ROLES.find((item) => item.code == response.profileId);
            this.$router.push(data? data.route : '');
          })
          .catch(err => console.error(err))

          
        }
      });
    },
  }
};
</script>

<style lang="scss">
.modal-content {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
}
</style>