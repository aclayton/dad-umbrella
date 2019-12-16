<template>
  <div id="content-slices" role="main">
    <div
      v-for="slice in slices"
      :key="slice.uuid"
      class="slice"
      :class="slice.type"
    >
      <component
        :is="slice.componentName"
        :slice-data="slice"
      />
    </div>
  </div>
</template>
<script>
// slice components : will be imported dynamically at "beforeCreate()"
import SubTitle from '@/components/slices/subtitle/AppSubTitle.vue'
import TextArea from '@/components/slices/textarea/AppTextArea.vue'
import Services from '@/components/slices/services/AppServicesList.vue'
import Projector from '@/components/slices/slideshow/Projector.vue'
export default {
  name: 'Slices',
  components: { SubTitle, TextArea, Services, Projector },
  computed: {
    slices() {
      return this.$store.getters['pages/slices']
    }
  },
  beforeCreate() {
    // console.log('process.env.VUE_ENV', process.env.VUE_ENV)
    // if (process.env.VUE_ENV === 'server') {
    //   console.log('this.sliceComponents ====>>>>', this.sliceComponents)
    //   this.sliceComponents.forEach((component) => {
    //     import(component)
    //   })
    // }
  }
}
</script>
