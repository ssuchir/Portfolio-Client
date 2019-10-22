'use strict'
const store = require('./../store')

const successMessage = function (newText) {
  $('#stock-message').text(newText)
  setTimeout(function () {
    $('#stock-message').text('')
  }, 2000)
  $('#stock-message').removeClass('failure')
  $('#stock-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#stock-message').text(newText)
  setTimeout(function () {
    $('#stock-message').text('')
  }, 2000)
  $('#stock-message').removeClass('success')
  $('#stock-message').addClass('failure')
}
const onCreateStockSuccess = function (responseData) {
  successMessage('New stock created successfully!')
  store.stock = responseData.stock
  console.log(store.stock)
  $('#create-stock').trigger('reset')
  console.log(responseData)
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateStockSuccess
}
