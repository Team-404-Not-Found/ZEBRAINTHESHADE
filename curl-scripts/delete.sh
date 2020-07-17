API="https://protected-gorge-91362.herokuapp.com/"
URL_PATH="products"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \

echo
