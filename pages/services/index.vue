<template>
  <div>
    <b-container>
      <h1 class="title">
        dad-umbrella
      </h1>
    </b-container>
    <app-services-list :services="$store.state.services.list" />
  </div>
</template>

<script>
import BContainer from 'bootstrap-vue'
import AppServicesList from '@/components/slices/services/AppServicesList.vue'
export default {
  components: { AppServicesList, BContainer },
  async fetch({ store }) {
    await store.dispatch('services/getServices')
  }
}
</script>
