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
  
  setTimeout (() => {
    $('#message').text('')
  }, 1500)

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
  setTimeout (() => {
    $('#message').text('')
  }, 1500)

  $('#sign-out').trigger('reset')
  store.user = null
}

const onSignOutFailure = function () {
  $('#message').text('You failed signing out')
}

const onNewGameRefresh = function (info) {
  store.game = info.game
  console.log(info.game.cells)
  console.log(info.game._id)
  $('#new-game').trigger('reset')
  $('.container').show()
}

const onNewGameFailure = function () {
  $('#new-game').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameRefresh,
  onNewGameFailure
}
