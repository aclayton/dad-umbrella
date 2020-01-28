// *****************************************
// PAGE PROCESSORS
// *****************************************
const processPages = async function (pages, state) {
  const rootSliceIds = []
  pages.results.forEach((page) => {
    if (page.data.body.length > 0) {
      page.data.body.forEach((slice) => {
        if (slice.primary[slice.slice_type]) {
          rootSliceIds.push(slice.primary[slice.slice_type].id)
        }
      })
    }
  })
  await state.dispatch('components/getSliceData', rootSliceIds, { root: true })
  await state.commit('UPDATE_PAGES', pages.results)
}

// *****************************************
//  COMPONENT PROCESSORS
// *****************************************
const processComponentSlices = function (slices, state) {
  slices.results.forEach((slice, i) => {
    if (slice.data.body) {
      slice.data.body[0].items.forEach((x) => {
        state.dispatch(
          'components/getSliceData',
          [x[slice.data.body[0].slice_type].id],
          { root: true }
        )
      })
    }
    slice.componentName = snakeToCamel(slice.type).replace(/^\w/, c => c.toUpperCase())
  })
  state.commit('UPDATE_SLICES', slices.results)
}

// *****************************************
//  ALERT PROCESSORS
// *****************************************
const prococessError = async function (error, state) {
  const alert = {
    variant: 'danger',
    title: 'Error fetching the pages',
    msg: `${error}`,
    dispatch: () => state.dispatch('services/getPages', '', { root: true })
  }
  await state.dispatch('alerts/addAlert', alert, { root: true })
}

// *****************************************
//  HELPERS
// *****************************************
const snakeToCamel = (str) => {
  return str.replace(/([-_]\w)/g, g => g[1].toUpperCase())
}

const getSliceIds = (body) => {
  const sliceIds = []
  body.forEach((slice) => {
    sliceIds.push(slice.primary[slice.slice_type].id)
  })
  return sliceIds
}

export {
  processPages,
  prococessError,
  processComponentSlices,
  getSliceIds
}
