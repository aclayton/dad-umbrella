<template>
  <section
    v-if="sliceData"
    id="service-list"
  >
    <b-container>
      <b-row>
        <b-col
          v-for="slice in sliceData.items"
          :key="slice.uuid"
          cols="4"
        >
          <app-service-card
            v-if="slice.services"
            :uid="$objectifyIt(slice.services).uid"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'
import AppServiceCard from '@/components/slices/services/AppServiceCard.vue'
export default {
  name: 'ServicesList',
  components: { BContainer, BRow, BCol, AppServiceCard },
  props: {
    sliceData: { type: Object, default: () => {} }
  }
}
</script>
