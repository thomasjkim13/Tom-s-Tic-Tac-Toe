'use strict'
const store = require('./../store')

const onSignUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed')
}

const onSignInSuccess = function (response) {
  // print response so we can see what it is

  // save user to our store object
  store.user = response.user

  $('#message').text(response.user.email + ' signed in successfully!')
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#message').text('You have signed out successfully!')
  $('#sign-out').trigger('reset')
  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('You failed signing out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
