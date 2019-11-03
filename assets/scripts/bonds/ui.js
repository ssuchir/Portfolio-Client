'use strict'
const store = require('./../store')

const successMessage = function (newText) {
  $('#bond-message').text(newText)
  setTimeout(function () {
    $('#bond-message').text('')
  }, 5000)
  $('#bond-message').removeClass('failure')
  $('#bond-message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#bond-message').text(newText)
  setTimeout(function () {
    $('#bond-message').text('')
  }, 5000)
  $('#bond-message').removeClass('success')
  $('#bond-message').addClass('failure')
}

const onCreateBondSuccess = function (responseData) {
  $('#create-bond-message').text('New bond successfully added!')
  successMessage('New bond created successfully!')
  store.bond = responseData.bond
  setTimeout(function () {
    $('#create-bond-message').text('')
  }, 5000)
  // console.log(store.bond)
  $('#create-bond').trigger('reset')
  // console.log(responseData)
}

const onCreateBondFailure = function () {
  failureMessage('New bond failed to create.')
}

const onGetAllBondsSuccess = function (responseData) {
  // clear all text before showing bonds
  $('#view-all-bonds-message').text('')
  // if null
  if (responseData.bonds.length === 0) {
    $('#view-all-bonds-message').text('Your Portfolio is empty. Add Investments!')
    $('#view-all-bonds-message').addClass('failure')
    $('#view-all-bonds-message').append('<p></p>')
    setTimeout(function () {
      $('#view-all-bonds-message').text('')
    }, 5000)
  } else {
    responseData.bonds.forEach(bond => {
      $('#view-all-bonds-message').removeClass('failure')
      $('#view-all-bonds-message').append('<p>ID: ' + bond.id + '</p>')
      $('#view-all-bonds-message').append('<p>Ticker: ' + bond.name + '</p>')
      $('#view-all-bonds-message').append('<p>Date of purchase: ' + bond.purchase_on + '</p>')
      $('#view-all-bonds-message').append('<p>Price: ' + bond.start_price + '</p>')
    })
    store.bonds = responseData.bonds
  }
}

const onUpdateBondSuccess = function (responseData) {
  $('#update-bond-message').text('Bond updated successfully.Click "See all Bonds" for your updated portfolio.')
  setTimeout(function () {
    $('#update-bond-message').text('')
  }, 5000)
  $('#update-bond-message').removeClass('failure').addClass('success')
  $('#update-bond').trigger('reset')
}

const onUpdateBondFailure = function () {
  $('#update-bond-message').text('Bond update failed')
  $('#update-bond-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#update-bond-message').text('')
  }, 5000)
}

const onDestroyBondSuccess = function (responseData) {
  $('#delete-bond-message').text('Bond deleted successfully. Click "See all Bonds" for your updated portfolio.')
  $('#delete-bond-message').removeClass('failure').addClass('success')
  setTimeout(function () {
    $('#delete-bond-message').text('')
  }, 5000)
  $('#delete-bond').trigger('reset')
}
const onDestroyBondFailure = function () {
  $('#delete-bond-message').text('Bond deletion failed')
  $('#delete-bond-message').removeClass('success').addClass('failure')
  setTimeout(function () {
    $('#delete-bond-message').text('')
  }, 5000)
}

module.exports = {
  successMessage,
  failureMessage,
  onCreateBondSuccess,
  onCreateBondFailure,
  onGetAllBondsSuccess,
  onUpdateBondSuccess,
  onUpdateBondFailure,
  onDestroyBondSuccess,
  onDestroyBondFailure
}
