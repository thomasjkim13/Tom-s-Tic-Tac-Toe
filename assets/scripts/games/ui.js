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
  $('#sign-out').show()
  $('#new-game').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  console.log(response)
  // save user to our store object
  store.user = response.user
  $('#message').text(response.user.email + ' signed in successfully!')
  setTimeout(() => {
    $('#message').text('')
  }, 2500)
  $('#sign-in').trigger('reset')
}

const onSignInFailure = function () {
  $('#message').text('Sign in failed')
}

const onSignOutSuccess = function () {
  $('#sign-up').show()
  $('#sign-in').show()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#message').text('You have signed out successfully!')
  $('.container').hide()
  $('#turn-message').hide()
  setTimeout(() => {
    $('#message').text('')
  }, 2500)

  $('#sign-out').trigger('reset')
  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('You failed signing out')
}

const onNewGameRefresh = function (response) {
  store.game = response.game
  $('#new-game').trigger('reset')
  $('#message').text('Play!!')
  $('.container').show()
  setTimeout(() => {
    $('#message').text('')
  }, 3000)
}

const onNewGameFailure = function () {
  $('#new-game').trigger('reset')
}

const onUpdateGameFailure = function () {
  $('#turn-message').text('Box is filled already!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameRefresh,
  onNewGameFailure,
  onUpdateGameFailure
}
