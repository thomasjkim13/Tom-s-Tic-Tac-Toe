'use strict'
const config = require('./../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// HEY API, I need something from you
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function (index, value) {
  return $.ajax({
    method: 'PATCH', 
    url: config.apiUrl + '/games/' + store.game._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": value
        },
        "over": false
      }
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  updateGame
}
