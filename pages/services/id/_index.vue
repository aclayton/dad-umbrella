<template>
  <div v-if="recordById">
    <h1>
      {{ recordById.data.title[0].text }}
      <small>{{ recordById.data.uid }}</small>
    </h1>
    <p>
      {{ recordById.data.description[0].text }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    recordById: {
      get() { return this.$store.getters['services/recordById'] }
    }
  },
  async fetch({ params, store }) {
    // await store.dispatch('services/getRecordById', params.index)
  }
}
</script>
