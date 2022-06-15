const jsonData = require('../static/filtered_data.json')
export const state = () => ({
  data: jsonData
})

export const mutations = {
}

export const actions = {
}

export const getters = {
  getData (state) {
    return state.data
  }
}
