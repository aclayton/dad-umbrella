<template>
    <div
      :v-if="sliceData"
      v-html="$prismic.asHtml(SubTitle)"
    />
</template>
<script>
export default {
  name: 'SubTitle',
  props: {
    sliceData: { type: Object, default: () => {} }
  },
  computed: {
    SubTitle() {
      return this.sliceData.data.sub_title
    }
  }
}
</script>
