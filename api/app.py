from flask import Flask, jsonify, request
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
        "images": {
            1: "https://i.imgur.com/WuFJV8d.png",
            2: "https://i.imgur.com/WuFJV8d.png",
            3: "https://i.imgur.com/WuFJV8d.png",
            4: "https://i.imgur.com/WuFJV8d.png",
        }
    },
]
collection_list = [
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
    """
    A very nice endpoint :)
    """
    return jsonify('hello')


@app.route('/collections/', methods=['GET'])
def get_collections():
    """
    Returns full list of collections, including cover image of the collection.
    """
    return jsonify(collection_list)


@app.route('/search/', methods=['POST'])
def get_product():
    """
    Searches through product-list
    """
    search_term = request.get_json()
    items_found = []
    for product in productList:
        if search_term["searchTerm"].lower() in product["productName"].lower():
            items_found.append(product)
    if len(items_found) > 0:
        print(items_found)
        return jsonify(items_found)
    return 'Not found'


@app.route('/searchBar/', methods=['POST'])
def search_bar():
    """
    Searchbar endpoint receives a string and returns a list of product names that match
    """
    search_term = request.get_json()
    if search_term["searchTerm"] == '':
        return jsonify('')
    items_found = []
    item_temp = {}
    for product in productList:
        if search_term["searchTerm"].lower() in product["productName"].lower():
            item_temp = {
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
