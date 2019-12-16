<template>
  <div>
    <b-card
      v-if="service"
      :title="service.data.title[0].text"
      :class="service.data.classes"
      :tag="service.data.tag"
      :img-src="service.data.main_image.url"
      :style="service.data.visibility === 'false' ? 'display: none' : ''"
    >
      <b-card-text>
        {{ service.data.description[0].text }}
      </b-card-text>
      <b-button
        :href="'services/id/' + service.uid"
        variant="primary"
      >
        More Info
      </b-button>
    </b-card>
  </div>
</template>
<script>
import { BCard, BCardText, BButton } from 'bootstrap-vue'
export default {
  name: 'ServiceCard',
  components: { BCard, BCardText, BButton },
  props: {
    uid: { type: String, default: () => '' }
  },
  computed: {
    service: function () {
      return this.$store.getters['services/service'](this.uid)
    }
  }
}
</script>
