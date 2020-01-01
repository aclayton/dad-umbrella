// *****************************************
// PAGE PROCESSORS
// *****************************************
const processPages = async function (pages, state) {
  const sliceIds = []
  await pages.results[0].data.body.forEach((slice) => {
    slice.componentName = snakeToCamel(slice.slice_type).replace(/^\w/, c => c.toUpperCase())
    slice.id = slice.primary[slice.slice_type].id
    sliceIds.push(slice.id)
  })
  await state.dispatch('components/getSliceData', sliceIds, { root: true })
  await state.commit('UPDATE_PAGES', pages.results)
}

// *****************************************
//  COMPONENT PROCESSORS
// *****************************************
const processComponentSlices = async function (slices, state) {
  await slices.results.forEach((slice, i) => {
    slice.componentName = snakeToCamel(slice.type).replace(/^\w/, c => c.toUpperCase())
  })
  await state.commit('UPDATE_SLICES', slices.results)
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
