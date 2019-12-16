<template>
  <b-container v-if="footerData" class="footer">
    <h2>FOOTER</h2>
  </b-container>
</template>
<script>
import { BContainer } from 'bootstrap-vue'
export default {
  name: 'PageHeader',
  components: { BContainer },
  computed: {
    footerData() {
      return this.$store.getters['pages/current']
    }
  }
}
</script>
