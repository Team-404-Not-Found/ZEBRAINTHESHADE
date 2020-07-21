API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/products"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--data '{
  "product": {
    "name": "'"${NAME}"'",
    "price": "'"${PRICE}"'",
    "description": "'"${DESCRIPTION}"'",
    "imageUrl": "'"${IMAGEURL}"'",
    "category": "'"${CATEGORY}"'",
    "inCart": "'"${INCART}"'",
    "quantity": "'"${QUANTITY}"'",
    "seller": "'"${SELLER}"'"
  }
}'

echo
