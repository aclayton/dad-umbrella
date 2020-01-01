import Prismic from 'prismic-javascript'
import config from '../appConfig'
import { processPages, prococessError } from '@/assets/js/vuexProcessors'

const state = () => ({
  all: []
})

const mutations = {
  UPDATE_PAGES(state, payload) { state.all = payload },
  UPDATE_API(state, payload) { state.API = payload }
}

const actions = {
  async getPages(state) {
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.at('document.type', 'page'), { lang: '*' })
      )
      .then(
        res => processPages(res, state),
        err => prococessError(err, state)
      )
  }
}

const getters = {
  pages: state => state.all,
  pageByUid: state => uid => state.all.find(x => x.uid === uid)
}

export { state, mutations, actions, getters }
