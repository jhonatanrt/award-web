<template>
  <div class="eg-slideshow">
    <slide>
      <h1>My slideshow</h1>
      <h4>By Zulko</h4>
    </slide>
    <slide>
      <h3>Title of this slide</h3>
      <p>Paragraph 1.</p>
      <p>Paragraph 2.</p>
    </slide>
    <slide :steps="3">
      <h3>Slide with bullet points</h3>
      <p v-if="step >= 2">This will appear first.</p>
      <p v-if="step >= 3">This will appear second.</p>
    </slide>
  </div>
</template>

<script>
import eagle from "eagle.js";

export default {
  name: "AppSlideshow",
  mixins: [eagle.slideshow],
};
</script>

<style scoped lang="scss">
</style>
