<template>
  <section class="section is-usp has-background is-medium">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <div class="card is-usp">
            <img
              role="presentation"
              src="https://getbedtimestories.com/assets/images/icons/family-c0f52dde.svg?1588602936"
            />
            <hr class="spacer is-1" />
            <h3 class="title is-4 is-spaced">Timepo de calidad</h3>
            <p class="subtitle is-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-usp">
            <img
              role="presentation"
              src="https://getbedtimestories.com/assets/images/icons/bookshelf-b83dab6e.svg?1588602936"
            />
            <hr class="spacer is-1" />
            <h3 class="title is-4 is-spaced">Reconocimiento laboral</h3>
            <p class="subtitle is-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
        <div class="column is-4">
          <div class="card is-usp">
            <img
              role="presentation"
              src="https://getbedtimestories.com/assets/images/icons/book-96ff6ee1.svg?1588602936"
            />
            <hr class="spacer is-1" />
            <h3 class="title is-4 is-spaced">Lugar seguro para todos</h3>
            <p class="subtitle is-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CONSTANTS from "../util/constants";

export default {
  name: "AppDetail",
  props: {
    title: String,
    subtitle: String,
    description: String,
    data: Object,
    information: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
/* .feature {
  &__button{
    margin-top: 30px;
  }
  &__box{
    margin: 4rem;
    align-self: center;
  }
}
.title {
  font-size: 28px;
  line-height: 42px;
  color: #546496;
}
.image-box{
  padding: 20%;
}
.banner{
  &__title{
    text-align: center;
  }
}
.banner__subtitle{
  padding: 0 5rem;
  text-align: center;
}

.container {
    margin: 0 auto;
    position: relative;
}
@media screen and (min-width: 1472px){
  .container {
    max-width: 1344px;
    width: 1344px;
  }
}
@media screen and (min-width: 1280px){
  .container {
    max-width: 1152px;
    width: 1152px;
  }
}
@media screen and (min-width: 1080px){
  .container {
    max-width: 960px;
    width: 960px;
  }
} */
.card {
  background-color: transparent;
  box-shadow: none;
  color: #998DA0;
  max-width: 100%;
  position: relative;
  &.is-usp {
      max-width: 320px;
      margin: 0 auto;
  }
}
</style>
