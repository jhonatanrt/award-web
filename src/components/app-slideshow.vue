<template>
  <div class="reveal" id="app">
    <div class="slides">
      <section>Premio al {{data.title}}
        <p>- {{data.month}} -</p>
      </section>
      <section>
        <img
          src="https://awards.producthackers.es/2018/assets/img/about.png"
        />
      </section>
      <section v-if="detail">
        <section v-for="(element, index) in detail" :key="index">
          <div class="content-img">
            <figure class="image is-128x128">
              <img class="is-rounded" v-bind:src="element.photoUrl" />
            </figure>
          </div>
          <p>
           🏅 {{element.name}} {{element.lastName}} 🏅
          </p>
          <p class="subtitle">
            {{element.documentType}}:  {{element.document}}
          </p>
          <span class="content-comment">Comentario</span>
          <p class="subtitle is-comment">
            {{element.comentary}}
          </p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import Reveal from "reveal.js/js/reveal";
export default {
  name: "AppSlideshow",
  props: {
    data: Object,
    detail: Array
  },
  components: {},
  data() {
    return { message: "" };
  },
  mounted() {
    Reveal.initialize();
  },
  watch:{
    detail(){
      Reveal.slide(0,0,0);
    }
  }
};
</script>

<style scoped lang="scss">
/* @import url('../../node_modules/reveal.js/css/reveal.scss'); */
/* @import url('../node_modules/reveal.js/css/theme/white.css'); */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
}
.content-img{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.subtitle{
  font-size: 30px;
  &.is-comment{
    padding: 0 15%;
  }
}
.content-comment{
  font-size: 30px;
  /* text-decoration: underline; */
  font-weight: 500;
}
</style>