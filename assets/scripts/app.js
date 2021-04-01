'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamesEvents = require ('./games/events')
console.log ('gamesEvents', gamesEvents)
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', gamesEvents.onSignUp)
})
