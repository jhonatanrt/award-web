<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Dashboard</h1>
        <h2 class="subtitle">{{firstname}} {{lastname}}</h2>
        <button class="button is-vcentered is-primary is-fullwidth" type="button" @click="logout">Cerrar sesión</button>
      </div>
    </div>
  </section>
</template>


<script>

export default {
  name: "about",
  created() {
  },
  computed: {
    firstname(){
      return this.$store.state.user.first_name;
    },
    lastname(){
      return this.$store.state.user.last_name;
    } 
  },
  data() {
    return {

    };
  },
  methods: {
    logout() {
        this.$store.dispatch('logout')
          .then((response) => {
            this.$router.push("/");
          })
          .catch(err => console.error(err))
    },
  }
};
</script>
