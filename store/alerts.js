import uuid from 'uuid/v1'

const state = () => ({
  all: []
})

const mutations = {
  ADD_ALERT(state, alert) {
    state.all.push(alert)
  },
  DELETE_ALERT(state, uuid) {
    const index = state.all.indexOf(state.all.find(alert => alert.uuid === uuid))
    if (index !== -1) state.list.splice(index, 1)
  }
}

const actions = {
  addAlert(state, alert) {
    alert.uuid = uuid()
    state.commit('ADD_ALERT', alert)
  },
  deleteAlert(state, uuid) {
    state.commit('DELETE_ALERT', uuid)
  }
}

const getters = {
  all: state => state.all
}

export { state, mutations, actions, getters }
