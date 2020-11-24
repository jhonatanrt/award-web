<template>
  <div class="layout">
    <AppNavbar :data="information"/>
    <main>
      <slot></slot>
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "@/components/app-navbar.vue";
import AppFooter from "@/components/app-footer.vue";

export default {
  name: "AppLayout",
  components: {
    AppNavbar,
    AppFooter
  },
  props: {
    msg: String,
    data: Object
  },
  data(){
    return {
    }
  },
  computed: {
    information: function () {
      const { data } = this.$store.state;
      // document.title = `${company.name}`
      return {
        logoUrl: '',
        phone: '',
        whatsappUrl: '',
        facebookUrl: 'https://www.facebook.com/sistemasUNMSM/',
        name: 'THESIS - UNMSM'
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>
