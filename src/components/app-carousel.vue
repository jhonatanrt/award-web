<template>
  <carousel :per-page="1" :mouse-drag="true">
    <slide v-for="(item, index) in data" :key="index">
      <div class="example-slide">Slide {{index+1}}</div>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "AppCarousel",
  props: {
    title: String,
    subtitle: String,
    data: Array
  },
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      sponsor: [
        { imageUrl: "" },
        { imageUrl: "" },
        { imageUrl: "" },
        { imageUrl: "" },
        { imageUrl: "" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.example-slide {
  align-items: center;
  background-color: #ccc;
  color: #ffffff;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 35rem;
}
</style>
