<template>
  <b-container v-if="headerData" class="title">
    <div v-html="$prismic.asHtml($objectifyIt(headerData).data.title)" />
  </b-container>
</template>
<script>
import { BContainer } from 'bootstrap-vue'
export default {
  name: 'PageHeader',
  components: { BContainer },
  computed: {
    headerData() {
      return this.$store.getters['pages/current']
    }
  }
}
</script>
