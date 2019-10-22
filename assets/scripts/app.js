'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const stockEvents = require('./stocks/events')
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
})
