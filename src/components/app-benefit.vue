<template>
  <section class="hero section is-hero is-warning">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6 is-5-fullhd is-offset-1-fullhd">
          <div class="section-header">
            <h2 class="title is-2 is-spaced">
              Conviertete en el mejor<span
                class="spacer is-horizontal is-05"
              ></span
              ><span class="tag is-white">Nuevo</span>
            </h2>
            <h2 class="subtitle is-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </h2>
            <div class="field is-grouped">
              <div class="control">
                <a class="button is-white is-medium" href="/school"
                  >🎓 Revisa tus reconocimientos</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="section-media">
            <img
              class="full-width"
              role="presentation"
              src="https://getbedtimestories.com/assets/images/school/school-933bc224.svg?1588602936"
            />
            <p><small>Join our Storytelling School for Families.</small></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CONSTANTS from "../util/constants";

export default {
  name: "AppBenefit",
  props: {
    title: String,
    subtitle: String,
  },
  data() {
    return {
      sponsor: CONSTANTS.SPONSOR,
      benefit: CONSTANTS.BENEFIT,
    };
  },
};
</script>

<style scoped lang="scss">
.full-width {
  width: 100%;
}
</style>
