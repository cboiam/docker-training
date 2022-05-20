from flask import Flask
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    try:
        conn = psycopg2.connect(host="postgres", database="postgres", user="postgres", password="password")
        return """{ "message": "connected" }"""
    except:
        return """{ "message": "not connected" }"""

app.run(host='0.0.0.0', port=9000)