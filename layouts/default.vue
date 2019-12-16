<template>
  <div>
    <app-nav-bar v-if="showNav" />
    <nuxt />
    <app-alerts />
  </div>
</template>
<script>
import AppNavBar from '@/components/header/navbar/AppNavbar.vue'
import AppAlerts from '@/components/alerts/AppAlerts.vue'
import appConfig from '@/appConfig'
export default {
  components: { AppNavBar, AppAlerts },
  data() {
    return {
      showNav: appConfig.globalNav
    }
  }
}
</script>
<style>
@import '@/node_modules/bootstrap/dist/css/bootstrap.css';
@import '@/node_modules/bootstrap-vue/dist/bootstrap-vue.css';
</style>
