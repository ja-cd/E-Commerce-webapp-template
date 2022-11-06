from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

product_list = [
    {
      "key": 1,
      "productName": "Book",
      "description": "Leather bound, soft paper",
      "price": 10,
      "images": ["https://i.imgur.com/aKXzodL.png"],
      "collectionName": "Literature"
    },
    {
      "key": 2,
      "productName": "Phone",
      "description": "Suspiciously low cost phone",
      "price": 399,
      "images": ["https://i.imgur.com/acKLHYL.png"],
      "collectionName": "Electronics"
    },
    {
      "key": 3,
      "productName": "Desk",
      "description": "Just as good as the real oak",
      "price": 99,
      "images": ["https://i.imgur.com/jtj2vWd.png"],
      "collectionName": "Furniture"
    },
    {
      "key": 4,
      "productName": "Weird thing",
      "description": "Unknown materials used",
      "price": 1025,
      "images": ["https://i.imgur.com/CyE49xW.png"],
      "collectionName": "Self Care"
    },
    {
      "key": 5,
      "productName": "Best Video Game Ever",
      "description": "It's mad fun",
      "price": 59.99,
      "images": ["https://i.imgur.com/CyE49xW.png"],
      "collectionName": "Games",
    },
]

collection_list= [
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
    {
    "key": 5,
    "collectionName": "Electronics",
    "url": "https://i.imgur.com/eWyjefO.png",
  },
]


@ app.route('/hello')
def hello():
    """
    A very nice endpoint :)
    """
    return jsonify('hello')


@ app.route('/collections/', methods=['GET'])
def get_collections():
    """
    Returns full list of collections, including cover image of the collection.
    """
    return jsonify(collection_list)


@ app.route('/collectionProducts/', methods=['POST'])
def getCollectionProducts():
  searchTerm= request.get_json()
  itemsFound= []
  for product in productList:
      if searchTerm["searchTerm"].lower() in product["collectionName"].lower():
          itemsFound.append(product)
  if len(itemsFound) > 0:
      print(itemsFound)
      return jsonify(itemsFound)
  return('Not found')



@ app.route('/search/', methods=['POST'])
def get_product():
    """
    Searches through product-list
    """
    search_term= request.get_json()
    items_found= []
    for product in product_list:
        if search_term["searchTerm"].lower() in product["productName"].lower():
            items_found.append(product)
    if len(items_found) > 0:
        print(items_found)
        return jsonify(items_found)
    return 'Not found'


@ app.route('/searchBar/', methods=['POST'])
def search_bar():
    """
    Searchbar endpoint receives a string and returns a list of product names that match
    """
    search_term= request.get_json()
    if search_term["searchTerm"] == '':
        return jsonify('')
    items_found= []
    item_temp= {}
    for product in product_list:
        if search_term["searchTerm"].lower() in product["productName"].lower():
            item_temp= {
                'productName': product["productName"],
                'key': product['key'],
            }
            items_found.append(item_temp)
    if len(items_found) > 0:
        print(items_found)
        return jsonify(items_found)
    return jsonify('')


if __name__ == '__main__':
    app.run(debug=True)
