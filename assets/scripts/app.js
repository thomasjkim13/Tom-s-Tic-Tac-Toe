'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamesEvents = require ('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', gamesEvents.onSignUp)
  $('#sign-in').on('submit', gamesEvents.onSignIn)
})
