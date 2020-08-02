API="http://localhost:4741"
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
