<template>
  <b-container v-if="sliceData" class="slice text-area">
    <div v-html="$prismic.asHtml(objectifyIt(sliceData.primary).text_content)" />
  </b-container>
</template>
<script>
import { BContainer } from 'bootstrap-vue'
export default {
  name: 'TextArea',
  components: { BContainer },
  props: {
    sliceData: { type: Object, default: () => {} }
  },
  methods: {
    objectifyIt: it => Object.assign({}, it)
  }
}
</script>
