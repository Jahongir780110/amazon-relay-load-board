const jsonData = require('../static/filtered_data.json')
export const state = () => ({
  data: jsonData,
  filteredData: jsonData,
})

export const mutations = {
  setFilteredData(state, payload) {
    state.filteredData = payload
    console.log(state.filteredData)
  },
}

export const actions = {
  bigDaddy({ commit, state, dispatch }, filters) {
    if (Object.keys(filters).length === 0) {
      return commit('setFilteredData', state.data)
    }
    const bigData = state.data
    const newFilteredData = new Set()
    for (const key in filters) {
      if (Object.hasOwnProperty.call(filters, key)) {
        const filter = filters[key]
        if (Array.isArray(filter)) {
          filter.forEach((filVal) => {
            bigData.forEach((data) => {
              if (data[key] === filVal) {
                newFilteredData.add(data)
              } else if (dispatch('complexFilter', { filter, data }))
                newFilteredData.add(data)
            })
          })
        } else {
          bigData.forEach((data) => {
            if (data[key] === filter) {
              newFilteredData.add(data)
            } else if (dispatch('complexFilter', { filter, data }))
              newFilteredData.add(data)
          })
        }
      }
    }
    commit('setFilteredData', [...newFilteredData])

    // filters.forEach((filter) => {

    // })
  },
  complexFilter({ state, commit }, payload) {
    console.log('payload', payload)
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
