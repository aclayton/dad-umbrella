<template>
  <footer>
    <b-container v-if="footerData" class="footer">
      <h2>FOOTER</h2>
    </b-container>
  </footer>
</template>
<script>
import { BContainer } from 'bootstrap-vue'
export default {
  name: 'PageHeader',
  components: { BContainer },
  computed: {
    footerData() {
      return this.$store.getters['pages/pageByUid'](this.$store.$router.currentRoute.params.index)
    }
  }
}
</script>
