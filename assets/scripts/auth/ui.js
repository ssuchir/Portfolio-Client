'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').text('')
  }, 5000)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  setTimeout(function () {
    $('#message').text('')
  }, 3000)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed.')
}
// added AfterSignInHide function here
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  $('.AfterSignInHide').hide()
  $('.AfterSignInShow').show()
  $('#sign-in').trigger('reset')
  // console.log('responseData is', responseData)
  store.user = responseData.user
  // console.log('store is', store)
}
const onSignInFailure = function () {
  failureMessage('Sign in failed.')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('.AfterSignInShow').hide()
  $('.AfterSignInHide').show()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
