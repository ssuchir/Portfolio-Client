'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onCreateStock = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createStock(formData)
    .then(ui.onCreateStockSuccess)
    .catch(ui.onCreateStockFailure)
}

module.exports = {
  onCreateStock

}
