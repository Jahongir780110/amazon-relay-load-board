function intersection(arrayA, arrayB) {
  if (arrayA.length === 0) return arrayB
  return arrayA.filter((value) => arrayB.includes(value))
}

const jsonData = require('../static/filtered_data.json')

export const state = () => ({
  data: jsonData,
  filteredData: jsonData,
  sortType: 'Start date Nearest',
})

export const mutations = {
  setFilteredData(state, payload) {
    state.filteredData = payload
    console.log('filteredData', state.filteredData)
  },
  setSortType(state, payload) {
    state.sortType = payload
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
  originAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    if (val === 'Anywhere') {
      return bigData
    }
    bigData.forEach((data) => {
      if (data.origin.city + ', ' + data.origin.state === val) {
        set.add(data)
      }
    })
    console.log('originResult', set)
    return [...set]
  },
  radiusAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    if (val === 'Any') {
      return bigData
    }
    bigData.forEach((data) => {
      if (Number(data.radius) <= Number(val)) {
        set.add(data)
      }
    })
    console.log('radiusResult', set)
    return [...set]
  },
  destinationAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    if (val === 'Anywhere') {
      return bigData
    }
    bigData.forEach((data) => {
      if (data.destination.city + ', ' + data.destination.state === val) {
        set.add(data)
      }
    })
    console.log('destinationResult', set)
    return [...set]
  },
  excludedCitiesAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    if (val === 'Anywhere') {
      return bigData
    }
    bigData.forEach((data) => {
      if (data.origin.city !== val && data.destination.city !== val) {
        set.add(data)
      }
    })
    console.log('excludedCitiesResult', set)
    return {
      data: [...set],
      isExcludedCities: true,
    }
  },
  startDateAction({ state }, val) {
    console.log('val', val) // 2022-06-08
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      console.log(
        "data.firstPickupTime.split('T')[0])",
        data.firstPickupTime.split('T')[0]
      )
      if (new Date(data.firstPickupTime.split('T')[0]) >= new Date(val)) {
        set.add(data)
      }
    })

    console.log('startDateResult', set)
    return [...set]
  },
  startTimeAction({ state }, val) {
    console.log('val', val) // 04:01:00
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      console.log(
        "data.firstPickupTime.split('T')[1].slice(0, -1)",
        data.firstPickupTime.split('T')[1].slice(0, -1)
      )
      if (data.firstPickupTime.split('T')[1].slice(0, -1) >= val) {
        set.add(data)
      }
    })

    console.log('startTimeResult', set)
    return [...set]
  },
  endDateAction({ state }, val) {
    console.log('val', val) // 2022-06-08
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (new Date(data.firstPickupTime.split('T')[0]) <= new Date(val)) {
        set.add(data)
      }
    })

    console.log('endDateResult', set)
    return [...set]
  },
  endTimeAction({ state }, val) {
    console.log('val', val) // 04:01:00
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (data.firstPickupTime.split('T')[1].slice(0, -1) <= val) {
        set.add(data)
      }
    })

    console.log('endTimeResult', set)
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
  loadTypeAction({ state }, val) {
    console.log('val', val) // Live, Drop and hook
    // loadingType = ['LIVE', 'PRELOADED']
    // unloadingType  ['DROP', 'LIVE']
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (
        (val === 'Live' && data.loadType === 'LIVE') ||
        (val === 'Drop and hook' && data.loadType !== 'LIVE')
      ) {
        set.add(data)
      }
    })
    console.log('loadTypeResult', set)
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
  priceAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    bigData.forEach((data) => {
      if (Number(data.payout.value / data.totalDistance.value) >= Number(val)) {
        set.add(data)
      }
    })
    console.log('priceResult', set)
    return [...set]
  },
  payoutAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    bigData.forEach((data) => {
      if (Number(data.payout.value) >= Number(val)) {
        set.add(data)
      }
    })
    console.log('payoutResult', set)
    return [...set]
  },
  stopsAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()

    if (val === 'Any') {
      return bigData
    } else if (val === '5+') {
      bigData.forEach((data) => {
        if (Number(data.stops) >= 5) {
          set.add(data)
        }
      })
    } else {
      bigData.forEach((data) => {
        if (Number(data.stops) === Number(val)) {
          set.add(data)
        }
      })
    }
    console.log('stopsResult', set)
    return [...set]
  },
  tripLengthAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    if (val === 'Any') {
      return bigData
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
    bigData.forEach((data) => {
      if (Number(data.totalDuration) <= val) {
        set.add(data)
      }
    })
    console.log('tripLengthResult', set)
    return [...set]
  },
  minHoursAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (Number(data.totalDuration) >= Number(val) * 60 * 60 * 1000) {
        set.add(data)
      }
    })
    console.log('minHoursResult', set)
    return [...set]
  },
  maxHoursAction({ state }, val) {
    console.log('val', val)
    const bigData = state.data
    const set = new Set()
    bigData.forEach((data) => {
      if (Number(data.totalDuration) <= Number(val) * 60 * 60 * 1000) {
        set.add(data)
      }
    })
    console.log('maxHoursResult', set)
    return [...set]
  },
  sortData({ state, commit }, val) {
    const data = [...state.filteredData]
    if (val === 'Start date Nearest') {
      data.sort((a, b) => {
        return new Date(a.firstPickupTime) - new Date(b.firstPickupTime)
      })
    } else if (val === 'Start date Farthest') {
      data.sort((a, b) => {
        return new Date(b.firstPickupTime) - new Date(a.firstPickupTime)
      })
    } else if (val === 'Age Oldest') {
      data.sort((a, b) => {
        return b.totalDuration - a.totalDuration
      })
    } else if (val === 'Age Newest') {
      data.sort((a, b) => {
        return a.totalDuration - b.totalDuration
      })
    } else if (val === 'Price per distance Lowest') {
      data.sort((a, b) => {
        return (
          a.payout.value / a.totalDistance.value -
          b.payout.value / b.totalDistance.value
        )
      })
    } else if (val === 'Price per distance Highest') {
      data.sort((a, b) => {
        return (
          b.payout.value / b.totalDistance.value -
          a.payout.value / a.totalDistance.value
        )
      })
    } else if (val === 'Distance Shortest') {
      data.sort((a, b) => {
        return a.totalDistance.value - b.totalDistance.value
      })
    } else if (val === 'Distance Longest') {
      data.sort((a, b) => {
        return b.totalDistance.value - a.totalDistance.value
      })
    } else if (val === 'Payout Lowest') {
      data.sort((a, b) => {
        return a.payout.value - b.payout.value
      })
    } else if (val === 'Payout Highest') {
      data.sort((a, b) => {
        return b.payout.value - a.payout.value
      })
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
