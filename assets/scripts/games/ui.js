'use strict'
const store = require ('./../store')

const onSignUpSuccess = function () {
    $('#message').text('Signed up successfully')
    $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
    $('#message').text('Sign up failed')
}