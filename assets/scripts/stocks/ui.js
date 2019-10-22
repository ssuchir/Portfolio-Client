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
      $('#view-all-stocks-message').append('<p>Date of stock: ' + stock.purchase_on + '</p>')
      $('#view-all-stocks-message').append('<p>Price: ' + stock.start_price + '</p>')
    })
    store.stocks = responseData.stocks
    // $('.no-display-until-view-all').show()
  }
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateStockSuccess,
  onCreateStockFailure,
  onGetAllStocksSuccess
}
