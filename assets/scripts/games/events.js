'use strict'
const getFormFields = require ('./../../../lib/get-form-fields')
const api = require ('./api')
const ui = require ('./ui')

const onSignUp = function (event) {
    event.preventDefault ()
    const form = event.target
    const data = getFormFields (form)
    
    api.signUp (data)
        .then(ui.onSignUpSuccess)
        .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
    event.preventDefault ()
    const form = event.target
    const data = getFormFields (form)
    
    api.signIn (data)
        .then(ui.onSignInSuccess)
        .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
    const form = event.target
    const data = getFormFields (form)
  
    api.signOut (data)
      .then(ui.onSignOutSuccess)
      .catch(ui.onSignOutFailure)
}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut
}