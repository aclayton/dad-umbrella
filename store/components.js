import Prismic from 'prismic-javascript'
import config from '../appConfig'
import { processComponentSlices, prococessError } from '@/assets/js/vuexProcessors'

const state = () => ({
  slices: []
})

const mutations = {
  UPDATE_SLICES(state, payload) {
    payload.forEach(x => state.slices.push(x))
    console.log('latest slices state:', state.slices)
  }
}

const actions = {
  async getSliceData(state, ids) {
    console.log('getting slice data for ids =>', ids)
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.in('document.id', ids), { lang: '*' })
      )
      .then(
        res => processComponentSlices(res, state),
        err => prococessError(err, state)
      )
  }
}

const getters = {
  slices: state => state.slices,
  slicesByIds: state => ids => state.slices.filter(x => ids.includes(x.id))
}

export { state, mutations, actions, getters }
