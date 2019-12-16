import Prismic from 'prismic-javascript'
import config from '../appConfig'
import { processPages, processPage, processPageSlices, prococessError } from '@/assets/js/vuexProcessors'

const state = () => ({
  all: [],
  current: {},
  slices: [],
  API: {}
})

const mutations = {
  UPDATE_PAGES(state, payload) { state.all = payload },
  UPDATE_CURRENT(state, payload) { state.current = payload },
  UPDATE_SLICES(state, payload) { payload.forEach(x => state.slices.push(x)) },
  UPDATE_API(state, payload) { state.API = payload }
}

const actions = {
  async getAPI(state) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(api => state.commit('UPDATE_API', api))
  },
  async getPages(state) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.at('document.type', 'page'), { lang: '*' })
      )
      .then(
        res => processPages(res, state),
        err => prococessError(err, state)
      )
  },
  async getPage(state, uid) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.at('my.page.uid', uid), { lang: '*' })
      )
      .then(
        res => processPage(res, state),
        err => prococessError(err, state)
      )
  },
  async getSliceData(state, ids) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.in('document.id', ids), { lang: '*' })
      )
      .then(
        res => processPageSlices(res, state),
        err => prococessError(err, state)
      )
  }
}

const getters = {
  pages: state => state.all,
  current: state => state.current,
  slices: state => state.slices,
  pageByUid: state => uid => state.all.find(x => x.uid === uid),
  sliceById: state => id => state.slices.find(x => x.id === id),
  slicesByIds: state => ids => state.slices.filter(x => ids.includes(x.id))
}

export { state, mutations, actions, getters }
