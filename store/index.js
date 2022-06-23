const jsonData = require('../data/filtered_data.json')

function intersection(arrayA, arrayB) {
  if (arrayA.length === 0) return arrayB
  return arrayA.filter((value) => arrayB.includes(value))
}

export const state = () => ({
  data: jsonData,
  filteredData: jsonData,
  sortType: 'Start date Nearest',
})

export const mutations = {
  setFilteredData(state, payload) {
    state.filteredData = payload
  },
  setSortType(state, payload) {
    state.sortType = payload
  },
}

export const actions = {
  async bigDaddy({ commit, state, dispatch }, filters) {
    let result = []

    if (Object.keys(filters).length === 0) {
      return commit('setFilteredData', state.data)
    }

    for (const key in filters) {
      const filter = filters[key]

      if (Array.isArray(filter)) {
        let tempResult = []
        const tempSet = new Set()

        for (const filVal of filter) {
          const a = await dispatch([key] + 'Action', filVal)
          if (a.isExcludedCities) {
            tempResult = [...intersection(tempResult, a.data)]
          } else {
            tempResult.push(...a)
          }
        }
        tempResult.forEach((item) => tempSet.add(item))
        result = intersection(result, [...tempSet])
      } else {
        const a = await dispatch([key] + 'Action', filter)
        result = intersection(result, a)
      }
    }

    commit('setFilteredData', result)
  },
  workTypeAction({ state }, val) {
    return state.data.filter((data) => data.workType === val)
  },
  originAction({ state }, val) {
    if (val === 'Anywhere') {
      return state.data
    }
    return state.data.filter(
      (data) => `${data.origin.city}, ${data.origin.state}` === val
    )
  },
  radiusAction({ state }, val) {
    if (val === 'Any') {
      return state.data
    }
    return state.data.filter((data) => Number(data.radius) <= Number(val))
  },
  destinationAction({ state }, val) {
    if (val === 'Anywhere') {
      return state.data
    }
    return state.data.filter(
      (data) => `${data.destination.city}, ${data.destination.state}` === val
    )
  },
  excludedCitiesAction({ state }, val) {
    if (val === 'Anywhere') {
      return state.data
    }
    const result = state.data.filter(
      (data) => data.origin.city !== val && data.destination.city !== val
    )
    return {
      data: result,
      isExcludedCities: true,
    }
  },
  startDateAction({ state }, val) {
    return state.data.filter(
      (data) => new Date(data.firstPickupTime.split('T')[0]) >= new Date(val)
    )
  },
  startTimeAction({ state }, val) {
    return state.data.filter(
      (data) => data.firstPickupTime.split('T')[1].slice(0, -1) >= val
    )
  },
  endDateAction({ state }, val) {
    return state.data.filter(
      (data) => new Date(data.lastDeliveryTime.split('T')[0]) <= new Date(val)
    )
  },
  endTimeAction({ state }, val) {
    return state.data.filter(
      (data) => data.lastDeliveryTime.split('T')[1].slice(0, -1) <= val
    )
  },
  trailerStatusAction({ state }, val) {
    return state.data.filter((data) => data.trailerStatus === val)
  },
  equipmentAction({ state }, val) {
    return state.data.filter((data) => data.equipmentType === val)
  },
  loadTypeAction({ state }, val) {
    return state.data.filter(
      (data) =>
        (val === 'Live' && data.loadType === 'LIVE') ||
        (val === 'Drop and hook' && data.loadType !== 'LIVE')
    )
  },
  driverTypeAction({ state }, val) {
    return state.data.filter((data) => data.driverType === val)
  },
  priceAction({ state }, val) {
    return state.data.filter(
      (data) =>
        Number(data.payout.value / data.totalDistance.value) >= Number(val)
    )
  },
  payoutAction({ state }, val) {
    return state.data.filter((data) => Number(data.payout.value) >= Number(val))
  },
  stopsAction({ state }, val) {
    const bigData = state.data

    if (val === 'Any') {
      return bigData
    } else if (val === '5+') {
      return bigData.filter((data) => Number(data.stops) >= 5)
    }
    return bigData.filter((data) => Number(data.stops) === Number(val))
  },
  tripLengthAction({ state }, val) {
    if (val === 'Any') {
      return state.data
    }
    switch (val) {
      case '1 day':
        val = 1000 * 60 * 60 * 24
        break
      case '2 days':
        val = 1000 * 60 * 60 * 24 * 2
        break
      case '5 days':
        val = 1000 * 60 * 60 * 24 * 5
        break
      case '1 week':
        val = 1000 * 60 * 60 * 24 * 7
        break
      case '1 month':
        val = 1000 * 60 * 60 * 24 * 30
        break
    }
    return state.data.filter((data) => Number(data.totalDuration) <= val)
  },
  minHoursAction({ state }, val) {
    return state.data.filter(
      (data) => Number(data.totalDuration) >= Number(val) * 60 * 60 * 1000
    )
  },
  maxHoursAction({ state }, val) {
    return state.data.filter(
      (data) => Number(data.totalDuration) <= Number(val) * 60 * 60 * 1000
    )
  },
  sortData({ state, commit }, val) {
    const data = [...state.filteredData]

    switch (val) {
      case 'Start date Nearest':
        data.sort((a, b) => {
          return new Date(a.firstPickupTime) - new Date(b.firstPickupTime)
        })
        break
      case 'Start date Farthest':
        data.sort((a, b) => {
          return new Date(b.firstPickupTime) - new Date(a.firstPickupTime)
        })
        break
      case 'Age Oldest':
        data.sort((a, b) => {
          return b.totalDuration - a.totalDuration
        })
        break
      case 'Age Nearest':
        data.sort((a, b) => {
          return a.totalDuration - b.totalDuration
        })
        break
      case 'Price per distance Lowest':
        data.sort((a, b) => {
          return (
            a.payout.value / a.totalDistance.value -
            b.payout.value / b.totalDistance.value
          )
        })
        break
      case 'Price per distance Highest':
        data.sort((a, b) => {
          return (
            b.payout.value / b.totalDistance.value -
            a.payout.value / a.totalDistance.value
          )
        })
        break
      case 'Distance Shortest':
        data.sort((a, b) => {
          return a.totalDistance.value - b.totalDistance.value
        })
        break
      case 'Distance Longest':
        data.sort((a, b) => {
          return b.totalDistance.value - a.totalDistance.value
        })
        break
      case 'Payout Lowest':
        data.sort((a, b) => {
          return a.payout.value - b.payout.value
        })
        break
      case 'Payout Highest':
        data.sort((a, b) => {
          return b.payout.value - a.payout.value
        })
        break
    }

    commit('setFilteredData', data)
    commit('setSortType', val)
  },
}

export const getters = {
  getData(state) {
    return state.data
  },
  getFilteredData(state) {
    return state.filteredData
  },
  getSortType(state) {
    return state.sortType
  },
}
