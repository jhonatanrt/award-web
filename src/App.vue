<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "GT Eesti Display", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
body {
  color: #998da0;
}
.has-background {
  background-color: #fbfbfd;
}
.button.is-medium {
  font-size: 1.25rem;
}
.button.is-white {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.section.is-hero .title {
  font-size: 3.625rem;
}
.subtitle.is-4 {
  font-size: 1.5rem;
}
.subtitle {
  color: #998da0;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.spacer.is-horizontal.is-05 {
  width: 0.5rem;
}
.spacer.is-horizontal {
  display: inline-block;
}
</style>
