#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "https://protected-gorge-91362.herokuapp.com/carts/5f11b535a7e54e001764fd36" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "id": "'"${ID}"'"
    }
  }'

echo
