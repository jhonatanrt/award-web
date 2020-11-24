<template>
  <section class="hero is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Para nosotros, tu mascota es lo más importante
      </h1>
      <hr class="separation__line">
      <h2 class="subtitle">
        Sabemos que eres un doglover, como nosotros, por eso aquí conseguirás al doglover que le brindará el servicio que necesitas para tu mascota.
      </h2>
      <router-link to="/signup" class="button is-primary is-outlined container__button">Regístrate</router-link>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "AppRegister",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
.container__button {
  padding: 0 60px;
}
</style>
