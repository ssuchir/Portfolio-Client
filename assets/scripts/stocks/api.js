'use strict'

const config = require('./../config')
const store = require('./../store')

const createStock = function (formData) {
  // console.log('createStock')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/stocks',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

const getAllStocks = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/stocks/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateStock = function (formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/stocks/' + formData.stock.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// const showStock = function (id) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl + `/stocks/${id}`,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const destroyStock = function (formData) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/stocks/' + formData.stock.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

module.exports = {
  createStock,
  getAllStocks,
  updateStock,
  // showStock,
  destroyStock
}
