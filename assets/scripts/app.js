'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const stockEvents = require('./stocks/events')
const bondEvents = require('./bonds/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-stock').on('submit', stockEvents.onCreateStock)
  $('#view-all-stocks-button').on('click', stockEvents.onGetAllStocks)
  $('#update-stock').on('submit', stockEvents.onUpdateStock)
  $('#delete-stock').on('submit', stockEvents.onDestroyStock)
  $('#change-password').hide()
  $('#create-stock').hide()
  $('#sign-out').hide()
  $('#delete-stock').hide()
  $('#update-stock').hide()
  $('#view-all-stocks-button').hide()
  // bond code
  $('#create-bond').on('submit', bondEvents.onCreateBond)
  $('#view-all-bonds-button').on('click', bondEvents.onGetAllBonds)
  $('#update-bond').on('submit', bondEvents.onUpdateBond)
  $('#delete-bond').on('submit', bondEvents.onDestroyBond)
  $('#create-bond').hide()
  $('#delete-bond').hide()
  $('#update-bond').hide()
  $('#view-all-bonds-button').hide()
  $('#header').hide()
  $('#header2').hide()
})
