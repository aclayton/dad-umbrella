<template>
  <div>
    <!-- <app-page-header /> -->
    <app-slices />
    <app-page-footer />
    <app-alerts />
  </div>
</template>
<script>
// import AppPageHeader from '@/components/header/AppPageHeader.vue'
import AppSlices from '@/components/slices/AppSlices.vue'
import AppPageFooter from '@/components/footer/AppPageFooter.vue'
import AppAlerts from '@/components/alerts/AppAlerts.vue'
export default {
  name: 'Index',
  components: {
    // AppPageHeader,
    AppSlices, AppPageFooter, AppAlerts },
  async fetch({ store, params }) {
    await store.dispatch('pages/getPages')
  }
}
</script>
