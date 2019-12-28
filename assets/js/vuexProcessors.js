// *****************************************
// PAGE PROCESSORS
// *****************************************
const processPages = async function (pages, state) {
  await pages.results[0].data.body.forEach((slice) => {
    slice.componentName = snakeToCamel(slice.slice_type).replace(/^\w/, c => c.toUpperCase())
    slice.id = slice.primary[slice.slice_type].id
  })
  await state.commit('UPDATE_PAGES', pages.results)
  await console.log('pages', pages.results)
}

const processPage = async function (page, state) {
  await state.commit('UPDATE_CURRENT', page.results[0])
  await state.dispatch('components/getSliceData', getSliceIds(page.results[0].data.body), { root: true })
}

const processPageSlices = async function (slices, state) {
  console.log('the slices', slices.results[1].data.body[0].items)
  await slices.results.forEach((slice) => {
    slice.componentName = snakeToCamel(slice.type).replace(/^\w/, c => c.toUpperCase())
  })
  await state.commit('UPDATE_SLICES', slices.results)
}

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
//  COMPONENT PROCESSORS
// *****************************************
const processComponentSlices = async function (slices, state) {
  await slices.results.forEach((slice) => {
    slice.componentName = snakeToCamel(slice.type).replace(/^\w/, c => c.toUpperCase())
  })
  await state.commit('UPDATE_SLICES', slices.results)
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
  processPage,
  processPageSlices,
  prococessError,
  processComponentSlices,
  getSliceIds
}
