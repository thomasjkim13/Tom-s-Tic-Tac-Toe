'use strict'
const store = require ('./../store')

const onSignUpSuccess = function () {
    $('#message').text('Signed up successfully')
    $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
    $('#message').text('Sign up failed')
}

const onSignInSuccess = function () {
    $('#message').text('Signed in successfully')
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