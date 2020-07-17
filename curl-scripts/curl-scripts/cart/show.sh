#!/bin/sh

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/carts"
CARTID="5f11b535a7e54e001764fd36"

curl "${API}${URL_PATH}${CARTID}" \
  --include \
  --request GET \
  --data '{
    "cart":{
      "owner": "'"${OWNERID}"'"
    }
  }'

echo
