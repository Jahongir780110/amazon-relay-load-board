function intersection(arrayA, arrayB) {
  if (arrayA.length === 0) return arrayB
  return arrayA.filter((value) => arrayB.includes(value))
}

const jsonData = require('../static/filtered_data.json')

export const state = () => ({
  data: jsonData,
  filteredData: jsonData,
})

export const mutations = {
  setFilteredData(state, payload) {
    state.filteredData = payload
    console.log('filteredData', state.filteredData)
  },
}

export const actions = {
  async bigDaddy({ commit, state, dispatch }, filters) {
    // filters => {workType: [], origin: [], driverType: ''};
    let result = []

    if (Object.keys(filters).length === 0) {
      return commit('setFilteredData', state.data)
    }

    for (const key in filters) {
      const filter = filters[key]

      if (Array.isArray(filter)) {
        const tempResult = []
        for (const filVal of filter) {
          const a = await dispatch([key] + 'Action', filVal)
          tempResult.push(...a)
        }
        result = intersection(result, tempResult)
      } else {
        const a = await dispatch([key] + 'Action', filter)
        result = intersection(result, a)
      }
    }

    console.log('result', result)
  },
  workTypeAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (data.workType === val) {
        set.add(data)
      }
    })
    return [...set]
  },
  trailerStatusAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (data.trailerStatus === val) {
        set.add(data)
      }
    })
    console.log('trailerStatusResult', set)
    return [...set]
  },
  equipmentAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (data.equipmentType === val) {
        set.add(data)
      }
    })
    console.log('equipmentResult', set)
    return [...set]
  },
  driverTypeAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (data.driverType === val) {
        set.add(data)
      }
    })
    console.log('equipmentResult', set)
    return [...set]
  },
}

export const getters = {
  getData(state) {
    return state.data
  },
  getFilteredData(state) {
    return state.filteredData
  },
}
