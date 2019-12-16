import Prismic from 'prismic-javascript'
import config from '../appConfig'

const state = () => ({
  all: []
})

const mutations = {
  UPDATE_SERVICES(state, payload) {
    state.all = payload
  },
  UPDATE_RECORDBYID(state, payload) {
    state.recordById = payload
  }
}

const actions = {
  async getServices(state) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(api => api.query(
        Prismic.Predicates.at('document.type', 'services')
      ))
      .then((response) => {
        state.commit('UPDATE_SERVICES', sortArrayByUid(response.results))
      }, (err) => {
        const alert = {
          variant: 'danger',
          title: 'Error fetching the services',
          msg: `${err}`,
          dispatch: () => state.dispatch('services/getServices', '', { root: true })
        }
        state.dispatch('alerts/addAlert', alert, { root: true })
      })
  }
}

const getters = {
  all: state => state.all,
  service: state => uid => state.all.find(x => x.uid === uid)
}

const sortArrayByUid = array => array.sort((a, b) => (a.uid > b.uid) ? 1 : -1)

export { state, mutations, actions, getters }
