<template>
  <div :v-if="sliceData">
    <div v-html="$prismic.asHtml($objectifyIt(sliceData.data).sub_title)" />
  </div>
</template>
<script>
export default {
  name: 'SubTitle',
  props: {
    sliceData: { type: Object, default: () => {} }
  }
}
</script>
