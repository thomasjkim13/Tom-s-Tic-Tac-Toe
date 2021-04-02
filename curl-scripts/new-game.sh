#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/new-game" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}"
--data '{
  "game": {
    "cells": ["x","","","","","","","",""],
    "over": false
  }
}'

echo
