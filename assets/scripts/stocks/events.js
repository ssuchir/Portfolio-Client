'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateStock = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createStock(formData)
    .then(ui.onCreateStockSuccess)
    .catch(ui.onCreateStockFailure)
}

const onGetAllStocks = function () {
  event.preventDefault()
  api.getAllStocks()
    .then(ui.onGetAllStocksSuccess)
    .catch(ui.onGetAllStockFailure)
}

const onUpdateStock = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateStock(formData)
    .then(ui.onUpdateStockSuccess)
    .catch(ui.onUpdateStockFailure)
}
const onDestroyStock = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroyStock(formData)
    .then(ui.onDestroyStockSuccess)
    .catch(ui.onDestroyStockFailure)
}
module.exports = {
  onCreateStock,
  onGetAllStocks,
  onUpdateStock,
  onDestroyStock
}
