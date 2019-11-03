'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateBond = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.createBond(formData)
    .then(ui.onCreateBondSuccess)
    .catch(ui.onCreateBondFailure)
}

const onGetAllBonds = function () {
  event.preventDefault()
  api.getAllBonds()
    .then(ui.onGetAllBondsSuccess)
    .catch(ui.onGetAllBondFailure)
}

const onUpdateBond = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateBond(formData)
    .then(ui.onUpdateBondSuccess)
    .catch(ui.onUpdateBondFailure)
}
const onDestroyBond = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.destroyBond(formData)
    .then(ui.onDestroyBondSuccess)
    .catch(ui.onDestroyBondFailure)
}
module.exports = {
  onCreateBond,
  onGetAllBonds,
  onUpdateBond,
  onDestroyBond
}
