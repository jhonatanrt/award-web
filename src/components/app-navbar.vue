<template>
  <section class="header__main">
    <header class="app-header">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <div class="navbar-item">
              <a class="brand" href="/">
                <div class="brand-icon">
                  <img
                    alt="Bedtime Stories"
                    role="presentation"
                    src="https://getbedtimestories.com/assets/images/app-icon-df78e144.png?1588602936"
                  />
                </div>
                <div class="brand-content">
                  <div class="brand-title">Award App</div>
                  <div class="brand-subtitle">
                    Reconocimiento y premiación de trabajadores
                  </div>
                </div>
              </a>
            </div>
            <div class="navbar-burger burger" data-target="mainNav">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div class="navbar-menu" id="mainNav">
            <div class="navbar-end">
              <a href="/" class="navbar-item is-active">Principal</a>
              <a
                href="/reconocimiento"
                class="navbar-item"
                v-if="user.profileId == 1"
                >Reconocimiento</a
              >
              <a
                href="/detalle"
                class="navbar-item"
                v-if="user.profileId == 2 || user.profileId == 1"
                >Premiación</a
              >
              <a
                href="/informacion"
                class="navbar-item"
                v-if="user.profileId == 3"
                >Somos</a
              >
              <div class="navbar-item" v-if="user.profileId">
                <a class="button is-link" @click="logout">
                  <strong>Salir</strong>
                </a>
              </div>

              <!-- <div class="navbar-item">
                <a
                  href="https://itunes.apple.com/us/app/bedtime-stories-read-tell/id1231933548"
                  class="app-store-badge"
                  target="_blank"
                >
                  <img
                    role="presentation"
                    src="https://getbedtimestories.com/assets/images/icons/app-store-badge-52d5e257.svg?1588602936"
                /></a>
              </div> -->
            </div>
          </div>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    msg: String,
    data: Object,
  },
  data() {
    return {
      isActive: false,
      companyName: "...",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    showMenu() {
      this.isActive = !this.isActive;
    },
    logout() {
      this.$store
        .dispatch('logout')
        .then((response) => {
          this.$router.push('/');
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style scoped lang="scss">
.header__main {
  color: #fff;
  background-size: 100% 110%;
  position: relative;
}

.brand {
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  line-height: 1;
  .brand-icon {
    width: 56px;
    height: 56px;
    margin-right: 1rem;
    transition-duration: 172ms;
    will-change: width, height, margin-right;
  }

  .brand-title {
    font-size: 1.25rem;
    font-weight: 500;
    color: #463853;
    transition-duration: 172ms;
    will-change: transform;
  }

  .brand-subtitle {
    margin-top: 0.25rem;
    font-size: 1.125rem;
    font-weight: normal;
    color: #998da0;
    opacity: 1;
    transition-duration: 172ms;
    will-change: opacity, transform;
  }
}
.navbar {
  background-color: inherit;
  min-height: 7.5rem;
  box-shadow: 0 1px 0 0 rgba(142, 81, 199, 0.05);
  transition-duration: 172ms;
  will-change: min-height;
}
.navbar-item img {
  max-height: inherit;
}

.app-header .navbar-menu .navbar-item {
  position: relative;
  padding: 0.875rem 1rem;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  border-radius: 10px;
  font-size: 1.125rem;
  line-height: 1;
  font-weight: 500;
  transition-duration: 86ms;
}

.tag.is-micro {
  height: auto;
  padding: 4px 4px 2px;
  font-size: 0.5rem;
  line-height: 1;
}
</style>
