<template>
  <section class="section is-hero">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
          <div class="section-header">
            <h1 class="title is-spaced">
              La Caja de Premios<span class="is-hidden-touch"><br /></span> app
              para empresas
            </h1>
            <h2 class="subtitle is-3">
              El poder reconocer a tus trabajadores a partir del feedback dentro del
              mes laborado, poder felicitarlos y más.
            </h2>
            <div class="field is-grouped">
              <div class="control">
                <a class="button is-primary is-medium" @click="openModal"
                  >Iniciar Sesión</a
                >
              </div>
              <div class="control">
                <a class="button is-light is-medium" href="/library"
                  >Explore sus premios</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="section-media">
            <img
              role="presentation"
              src="https://getbedtimestories.com/assets/images/hero/Hero-Karlotta@1x-8bd462e8.jpg?1588602936"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppBanner",
  props: {
    title: String,
    subtitle: String,
  },
  methods: {
    openModal() {
      this.$emit('setLogin', '')
    }
  }
};
</script>

<style scoped lang="scss">
.section {
  &.is-hero {
    .title {
      font-size: 3.625rem;
    }
  }
}
.subtitle {
  color: #998da0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
  &.is-3 {
    font-size: 2rem;
  }
}
.title {
  color: #463853;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.125;
}
</style>
