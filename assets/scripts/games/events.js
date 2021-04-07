'use strict'
const store = require('../store')
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameRefresh)
    .catch(ui.onNewGameFailure)
}

let currentPlayer = 'X'
const onClick = function(event) {
  const box = $(event.target)
  if (box.text() === '') {
    box.text(currentPlayer)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  } else {
    $('#turn-message').text('Box is filled already!')
    $('#turn-message').addClass('PlayerTurn')
    setTimeout(() => {
      $('#turn-message').text('')
      $('#turn-message').removeClass('PlayerTurn')
    }, 2000)
  }
  if (currentPlayer === 'X') {
    $('#turn-message').text("X's Turn")
  } else if (currentPlayer === 'O') {
    $('#turn-message').text("O's Turn")
  }else {
    
  }

}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onClick
}
