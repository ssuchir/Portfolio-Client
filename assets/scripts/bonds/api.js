'use strict'

const config = require('./../config')
const store = require('./../store')

const createBond = function (formData) {
  // console.log('createBond')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/bonds',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getAllBonds = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/bonds/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBond = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/bonds/' + formData.bond.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// const showBond = function (id) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + `/bonds/${id}`,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const destroyBond = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/bonds/' + formData.bond.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createBond,
  getAllBonds,
  updateBond,
  // showBond,
  destroyBond
}
