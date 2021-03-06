'use strict'
const { data } = require('jquery')
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
const onClick = function (event) {
  const box = event.target
  if ($(box).text() === '') {
    $(box).text(currentPlayer)
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  } else {
    store.game.cells = true
    $('#turn-message').text('Box is filled already!')
    setTimeout(() => {
      $('#turn-message').text('')
    }, 2000)
  }
  if (currentPlayer === 'X') {
    $('#turn-message').text("X's Turn")
  } else if (currentPlayer === 'O') {
    $('#turn-message').text("O's Turn")
  }
 const value = $(box).text()
 const index = store.game.cells
 console.log(store.game)

  checkWin()

  api.updateGame(index, value)
    .catch(ui.onUpdateGameFailure)
}

const checkWin = function () {
  const boxes = $('.box')
  store.game.cells = boxes.map(box => boxes[box].innerText)
  if (
    ( store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '' ) ||
    ( store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[3] !== '' ) ||
    ( store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[6] !== '' ) ||
    ( store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '' ) ||
    ( store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '' ) ||
    ( store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '' ) ||
    ( store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '' ) ||
    ( store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '' )
  ){
    $('#turn-message').text("Winner!!")
    setTimeout(() => {
      $('#turn-message').text('')
    }, 2000)
  } else if (
    ( store.game.cells[0] && store.game.cells[1] && store.game.cells[2] && store.game.cells[3] && store.game.cells[4] && store.game.cells[5] && store.game.cells[6] && store.game.cells[7] && store.game.cells[8]  ) 
  ) {
    $('#turn-message').text("Game Tied!")
    setTimeout(() => {
      $('#turn-message').text('')
    }, 2000)
  } else {
    store.game.cells = false
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onClick
}
