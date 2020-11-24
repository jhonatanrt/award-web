<template>
  <div class="home">
    <AppLayout>
      <AppBanner title="Freedog" subtitle="La libertad que tu y tu perro necesitan"/>
      <AppDetail :data="contacts" :information="information"/>
      <AppBenefit/>
    </AppLayout>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBanner from '@/components/app-banner.vue';
import AppDetail from '@/components/app-detail.vue';
import AppLayout from '@/components/app-layout.vue';
import AppBenefit from '@/components/app-benefit.vue';

export default {
  name: 'home',
  components: {
    AppBanner,
    AppBenefit,
    AppLayout,
    AppDetail,
  },
  data() {
    document.title = 'Award - Premia al mejor';

    return {
      contacts: {
        idTag: "contacs",
        title: "Miembros",
        description: "",
        detail: []
      }
    };
  },
  computed: {
  }
}
</script>

<style lang="scss">
</style>

