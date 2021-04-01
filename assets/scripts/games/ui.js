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

module.exports = {
    onSignUpSuccess,
    onSignUpFailure,
    onSignInSuccess,
    onSignInFailure
}