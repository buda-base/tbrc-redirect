from flask import Flask, json, request, send_from_directory
from flask_cors import CORS

api = Flask("KVP", static_url_path='', static_folder='./')
CORS(api)

@api.route('/', methods=['GET'])
def default():
    return api.send_static_file('index.html')

# FLASK_APP=staticserver flask run