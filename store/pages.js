import Prismic from 'prismic-javascript'
import config from '../appConfig'
import { processPages, processPage, prococessError } from '@/assets/js/vuexProcessors'

const state = () => ({
  all: [],
  current: {},
  API: {}
})

const mutations = {
  UPDATE_PAGES(state, payload) { state.all = payload },
  UPDATE_CURRENT(state, payload) { state.current = payload },
  UPDATE_API(state, payload) { state.API = payload }
}

const actions = {
  async getAPI(state) {
    console.log('getting API')
    await Prismic.getApi(config.prismicEndpoint).then(api => state.commit('UPDATE_API', api))
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
  }
}

const getters = {
  API: state => state.API,
  pages: state => state.all,
  current: state => state.current,
  pageByUid: state => uid => state.all.find(x => x.uid === uid)
}

export { state, mutations, actions, getters }
