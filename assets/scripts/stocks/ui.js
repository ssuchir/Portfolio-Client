'use strict'
const store = require('./../store')

const successMessage = function (newText) {
  $('#stock-message').text(newText)
  setTimeout(function () {
    $('#stock-message').text('')
  }, 5000)
  $('#stock-message').removeClass('failure')
  $('#stock-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#stock-message').text(newText)
  setTimeout(function () {
    $('#stock-message').text('')
  }, 5000)
  $('#stock-message').removeClass('success')
  $('#stock-message').addClass('failure')
}

const onCreateStockSuccess = function (responseData) {
  $('#create-stock-message').text('New stock successfully added!')
  successMessage('New stock created successfully!')
  store.stock = responseData.stock
  setTimeout(function () {
    $('#create-stock-message').text('')
  }, 5000)
  // console.log(store.stock)
  $('#create-stock').trigger('reset')
  // console.log(responseData)
}

const onCreateStockFailure = function () {
  failureMessage('New stock failed to create.')
}

const onGetAllStocksSuccess = function (responseData) {
  // clear all text before showing stocks
  $('#view-all-stocks-message').text('')
  // if null
  if (responseData.stocks.length === 0) {
    $('#view-all-stocks-message').text('Your Portfolio is empty. Add Investments!')
    $('#view-all-stocks-message').addClass('failure')
    $('#view-all-stocks-message').append('<p></p>')
    setTimeout(function () {
      $('#view-all-stocks-message').text('')
    }, 5000)
  } else {
    responseData.stocks.forEach(stock => {
      $('#view-all-stocks-message').removeClass('failure')
      $('#view-all-stocks-message').append('<p>ID: ' + stock.id + '</p>')
      $('#view-all-stocks-message').append('<p>Ticker: ' + stock.name + '</p>')
      $('#view-all-stocks-message').append('<p>Date of purchase: ' + stock.purchase_on + '</p>')
      $('#view-all-stocks-message').append('<p>Price: ' + stock.start_price + '</p>')
    })
    store.stocks = responseData.stocks
  }
}

const onUpdateStockSuccess = function (responseData) {
  $('#update-stock-message').text('Stock updated successfully.Click "View Portfolio" for your updated portfolio.')
  setTimeout(function () {
    $('#update-stock-message').text('')
  }, 5000)
  $('#update-stock-message').removeClass('failure').addClass('success')
  $('#update-stock').trigger('reset')
}

const onUpdateStockFailure = function () {
  $('#update-stock-message').text('Stock update failed')
  $('#update-stock-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#update-stock-message').text('')
  }, 5000)
}

const onDestroyStockSuccess = function (responseData) {
  $('#delete-stock-message').text('Stock deleted successfully. Click "View Portfolio" for your updated portfolio.')
  $('#delete-stock-message').removeClass('failure').addClass('success')
  setTimeout(function () {
    $('#delete-stock-message').text('')
  }, 5000)
  $('#delete-stock').trigger('reset')
}
const onDestroyStockFailure = function () {
  $('#delete-stock-message').text('Stock deletion failed')
  $('#delete-stock-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#delete-stock-message').text('')
  }, 5000)
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateStockSuccess,
  onCreateStockFailure,
  onGetAllStocksSuccess,
  onUpdateStockSuccess,
  onUpdateStockFailure,
  onDestroyStockSuccess,
  onDestroyStockFailure
}
