<template>
  <div>
    <app-page-header />
    <app-slices />
    <app-page-footer />
  </div>
</template>
<script>
import AppPageHeader from '@/components/header/AppPageHeader.vue'
import AppSlices from '@/components/slices/AppSlices.vue'
import AppPageFooter from '@/components/footer/AppPageFooter.vue'
export default {
  name: 'Index',
  components: { AppPageHeader, AppSlices, AppPageFooter },
  async fetch({ store, params }) {
    await store.dispatch('pages/getPage', params.index)
  }
}
</script>
