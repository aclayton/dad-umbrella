<template>
  <div>
    <div v-html="$prismic.asHtml($objectifyIt(sliceData.data).projector_title)" />
    <pre>{{ sliceIds }}</pre>
    <b-carousel>
      <b-carousel-slide
        v-for="slice in slices"
        :key="slice.uuid"
        :img-src="$objectifyIt(slice).data.slide_image.url"
        :text="$objectifyIt(slice).data.slide_title[0].text"
        :caption="$objectifyIt(slice).data.slide_description[0].text"
      />
    </b-carousel>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
export default {
  name: 'AppPropjector',
  components: { BCarousel, BCarouselSlide },
  props: {
    sliceData: { type: Object, default: () => {} }
  },
  computed: {
    sliceIds() {
      const theIDS = []
      this.sliceData.data.body.forEach((slice) => {
        theIDS.push(slice.items[0].slide.id)
      })
      return theIDS
    },
    slices() {
      return this.$store.getters['components/slicesByIds'](this.sliceIds)
    }
  },
  created() {
    this.$store.dispatch('components/getSliceData', this.sliceIds)
  }
}
</script>
