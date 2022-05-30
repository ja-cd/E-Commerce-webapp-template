from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

productList = [
    {
      "key": 1,
      "productName": "Book",
      "description": "Leather bound, soft paper",
      "price": 10,
    },
    {
      "key": 2,
      "productName": "Phone",
      "description": "Suspiciously low cost phone",
      "price": 399,
    },
    {
      "key": 3,
      "productName": "Desk",
      "description": "Just as good as the real oak",
      "price": 99,
    },
    {
      "key": 4,
      "productName": "Weird thing",
      "description": "Unknown materials used",
      "price": 1025,
    },
]
collections = [
  {
    "key": 1,
    "collectionName": "Self Care",
    "url": "https://i.imgur.com/WuFJV8d.png",
  },
  {
    "key": 2,
    "collectionName": "Literature",
    "url": "https://i.imgur.com/eRSDfrR.png",
  },
  {
    "key": 3,
    "collectionName": "Games",
    "url": "https://i.imgur.com/tT7BzCM.png",
  },
  {
    "key": 4,
    "collectionName": "Furniture",
    "url": "https://i.imgur.com/eWyjefO.png",
  },
]

@app.route('/hello')
def hello():
  return jsonify('hello')

@app.route('/collections/', methods=['GET'])
def getCollections():
  return jsonify(collections)

@app.route('/search/', methods=['POST'])
def getProduct():
  searchTerm = request.get_json()
  itemsFound = []
  for product in productList:
      if searchTerm["searchTerm"].lower() in product["productName"].lower():
          itemsFound.append(product)
  if len(itemsFound) > 0:
      print(itemsFound)
      return jsonify(itemsFound)
  return('Not found')

# Searchbar endpoint receives a string and returns a list of product names that match
@app.route('/searchBar/', methods=['POST'])
def searchBar():
  searchTerm = request.get_json()
  if searchTerm["searchTerm"] == '':
    return jsonify('')
  itemsFound = []
  itemTemp = {}
  for product in productList:
      if searchTerm["searchTerm"].lower() in product["productName"].lower():
          itemTemp = {
            'productName': product["productName"],
            'key': product['key'],
          }
          itemsFound.append(itemTemp)
  if len(itemsFound) > 0:
      print(itemsFound)
      return jsonify(itemsFound)
  return jsonify('')


if __name__ == '__main__':
    app.run(debug=True)