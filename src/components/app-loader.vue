<template>
<div class="content-loader" v-if="active">
 <div class="loading">
  <div></div>
  <div></div>
  <div></div>
</div>
</div>
</template>

<script>

export default {
  name: "AppLoader",
  props: {
    title: String,
    subtitle: String,
    active: Boolean
  },
};
</script>

<style scoped lang="scss">
$charade: #282a37;
$bluebell: #979fd0;

.content-loader {
    position: fixed;
    background-color: black;
    opacity: 0.6;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loading {
  display: flex;
  justify-content: center;
    
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: $bluebell;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}

@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}

</style>
