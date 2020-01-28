<template>
  <div id="components" role="main">
    <component
      :is="slice.componentName"
      v-for="slice in slices"
      :key="slice.id"
      :v-if="slice.parentType === 'page'"
      :class="`${slice.type} ${slice.id}`"
      :slice-data="slice"
    />
  </div>
</template>
<script>
import SubTitle from '@/components/slices/subtitle/AppSubTitle.vue'
import Carousel from '@/components/slices/slideshow/Carousel.vue'
export default {
  name: 'Slices',
  components: { SubTitle, Carousel },
  computed: {
    slices() {
      return this.$store.getters['components/slices']
    }
  }
}
</script>
