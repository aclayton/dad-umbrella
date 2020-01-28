<template>
  <div>
    <div class="carousel-title" v-html="$prismic.asHtml(title)" />
    <b-carousel>
      <b-carousel-slide
        v-for="slice in slices"
        :key="slice.uuid"
        :img-src="slice.data.slide_image.url"
        :text="slice.data.slide_title[0].text"
        :caption="slice.data.slide_description[0].text"
      />
    </b-carousel>
  </div>
</template>
<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
export default {
  name: 'Carousel',
  components: { BCarousel, BCarouselSlide },
  props: {
    sliceData: { type: Object, default: () => {} }
  },
  computed: {
    sliceIds() {
      const componentSliceIds = []
      this.sliceData.data.body[0].items.forEach((x) => {
        componentSliceIds.push(x.carousel_slide.id)
      })
      return componentSliceIds
    },
    slices() {
      return this.$store.getters['components/slicesByIds'](this.sliceIds)
    },
    title() {
      return this.sliceData.data.carousel_title
    }
  }
}
</script>
