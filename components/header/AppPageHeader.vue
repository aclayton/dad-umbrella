<template>
  <header>
    <app-nav-bar v-if="showNav" />
    <b-container v-if="pageTitle" class="title">
      <div v-html="$prismic.asHtml(pageTitle)" />
    </b-container>
  </header>
</template>
<script>
import { BContainer } from 'bootstrap-vue'
import AppNavBar from '@/components/header/navbar/AppNavbar.vue'
import appConfig from '@/appConfig'
export default {
  name: 'PageHeader',
  components: { BContainer, AppNavBar },
  data() {
    return { showNav: appConfig.globalNav }
  },
  computed: {
    pageTitle() {
      return 'test'
      // return this.$store.getters['pages/pageByUid'](this.$store.$router.currentRoute.params.index).data.title
    }
  }
}
</script>
