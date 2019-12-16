<template>
  <div v-if="alerts.length > 0" class="alerts">
    <b-alert
      v-for="alert in alerts"
      :key="alert.uuid"
      :variant="alert.variant"
      show
      fade
      dismissible
      @dismissed="clearAlert(alert)"
    >
      <h4 v-if="alert.title" class="alert-heading">
        {{ alert.title }}
      </h4>
      <p v-if="alert.msg">
        {{ alert.msg }}
      </p>
    </b-alert>
  </div>
</template>
<script>
import { BAlert } from 'bootstrap-vue'
export default {
  name: 'Alerts',
  components: { BAlert },
  computed: {
    alerts() { return this.$store.getters['alerts/all'] }
  },
  methods: {
    clearAlert(alert) {
      this.$store.dispatch('alerts/deleteAlert', alert.uuid)
    }
  }
}
</script>
