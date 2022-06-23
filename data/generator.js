const fs = require('fs')
const allData = require('./all_data.json')

const trucks = [
  "53' Trailer",
  "26' Truck",
  "28' Trailer",
  "53' Reefer",
  "26' Reefer",
  "53' Container",
  "20' Container",
  "40' Container",
  "45' Container",
  "40' HC Container",
  "45' HC Container",
]
const workTypes = ['One-way', 'Round-trips', 'Block']

const filteredData = allData.map((data) => {
  const loadType =
    Math.random() < 0.5 ? null : Math.random() < 0.5 ? 'LIVE' : 'PRELOADED'
  return {
    id: data.id,
    deadhead: Math.random() < 0.5 ? null : (Math.random() * 300).toFixed(2),
    trailerStatus: Math.random() > 0.5 ? 'Provided' : 'Required',
    driverType: data.transitOperatorType === 'SINGLE_DRIVER' ? 'Solo' : 'Team',
    totalDuration: data.totalDuration,
    firstPickupTime: data.firstPickupTime,
    lastDeliveryTime: data.lastDeliveryTime,
    equipmentType: trucks[Math.floor(Math.random() * 11)],
    loadType,
    unloadingType:
      loadType === null ? (Math.random() < 0.5 ? 'DROP' : 'LIVE') : null,
    stops: data.loads[0].stops.length,
    workType: workTypes[Math.floor(Math.random() * 3)],
    origin: data.startLocation,
    destination: data.endLocation,
    totalDistance: data.totalDistance,
    payout: data.payout,
    radius: Math.floor(Math.random() * 101),
  }
})

const result = JSON.stringify(filteredData)
fs.writeFile('./filtered_data.json', result, 'utf8', function (err) {
  if (err) {
    console.log('err', err)
  }
})
