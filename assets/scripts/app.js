'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamesEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-out').hide()
  $('#new-game').hide()
  $('.container').hide()

  // your JS code goes here

  $('#sign-up').on('submit', gamesEvents.onSignUp)
  $('#sign-in').on('submit', gamesEvents.onSignIn)
  $('#sign-out').on('click', gamesEvents.onSignOut)
  $('#new-game').on('click', gamesEvents.onNewGame)

  $('.box').on('click', gamesEvents.onClick)
})
