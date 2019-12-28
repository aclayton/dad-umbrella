import Prismic from 'prismic-javascript'
import config from '../appConfig'
import { processComponentSlices, prococessError } from '@/assets/js/vuexProcessors'

const state = () => ({
  slices: []
})

const mutations = {
  UPDATE_SLICES(state, payload) {
    console.log('committing update slices//components', payload)
    payload.forEach(x => state.slices.push(x))
  }
}

const actions = {
  async getSliceData(state, ids) {
    console.log('getting slice data', ids)
    await Prismic.getApi(config.prismicEndpoint)
      .then(
        api => api.query(Prismic.Predicates.in('document.id', ids), { lang: '*' })
      )
      .then(
        res => processComponentSlices(res, state),
        err => prococessError(err, state)
      )
  }
  // ,
  // async nuxtServerInit({ commit }) {
  //   if (process.env.VUE_ENV === 'server') {
  //     const recursive = require('recursive-readdir')
  //     await recursive('components/slices', ['.DS_Store'], function (err, files) {
  //       if (err) console.log(err)
  //       else commit('UPDATE_COMPONENTS', files)
  //     })
  //   }
  // }
}

const getters = {
  slices: state => state.slices,
  slicesByIds: state => ids => state.slices.filter(x => ids.includes(x.id))
}

export { state, mutations, actions, getters }
