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
                <a class="button is-primary is-medium" href="#platform"
                  >Iniciar Sesión</a
                >
              </div>
              <div class="control">
                <a class="button is-light is-medium" href="/library"
                  >Explore sus premios</a
                >
              </div>
            </div>
            <!-- <hr class="spacer is-1-5" />
            <a
              class="has-tint has-text-weight-semibold"
              href="http://www.parents-choice.org/product.cfm?product_id=35555"
              target="_blank"
              ><i class="icon icon-award"></i
              ><span>Parents' Choice Approved App</span></a
            > -->
          </div>
        </div>
        <div class="column is-6">
          <div class="section-media">
            <img
              role="presentation"
              src="https://getbedtimestories.com/assets/images/hero/Hero-Karlotta@1x-8bd462e8.jpg?1588602936"
            />
            <!-- <p>
              <small
                ><a href="/library/karlotta-the-knight"
                  ><u>Karlotta the Knight</u></a
                >
                with her squire and steed.</small
              >
            </p> -->
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
};
</script>

<style scoped lang="scss">
/* .hero {
  background-image: url("https://gofreedog.weebly.com/uploads/1/2/5/2/125243281/background-images/545687750.png");
  background-repeat: no-repeat;
  background-color: #f8f8f8;
  background-position: center;
  &.is-large {
    .banner-content {
    }
  }
} */

/* @media screen and (min-width: 769px) {
  .hero {
    &.is-large {
      .banner-content {
        text-align: right;
        padding-right: 3rem;
      }
    }
  }
} */
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
