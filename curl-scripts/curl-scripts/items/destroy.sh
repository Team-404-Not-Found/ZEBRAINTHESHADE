#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}/${cartId}/item/${ID}" \
  --include \
  --request DELETE \

echo
