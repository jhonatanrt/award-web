<template>
  <div class="home">
    <AppLayout>
      <AppBanner title="Award" subtitle="" @setLogin="setLogin"/>
      <AppDetail :data="contacts" :information="information"/>
      <AppBenefit/>
    </AppLayout>
    <AppLogin @setLogin="setLogin" v-if="showLogin"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBanner from '@/components/app-banner.vue';
import AppDetail from '@/components/app-detail.vue';
import AppLayout from '@/components/app-layout.vue';
import AppBenefit from '@/components/app-benefit.vue';
import AppLogin from '@/views/Login.vue';

export default {
  name: 'home',
  components: {
    AppBanner,
    AppBenefit,
    AppLayout,
    AppDetail,
    AppLogin,
  },
  data() {
    document.title = 'Award - Premia al mejor';

    return {
      showLogin: false,
      information: [],
      contacts: {
        idTag: "contacs",
        title: "Miembros",
        description: "",
        detail: []
      }
    };
  },
  computed: {
  },
  methods: {
    setLogin() {
      this.showLogin = !this.showLogin;
    }
  }
}
</script>

<style lang="scss">
</style>

