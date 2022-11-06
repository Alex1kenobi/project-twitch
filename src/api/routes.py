"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)




@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/login', methods=['POST'])
def login():
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password:
        user = User.query.filter_by (email=body_email).filter_by(password=body_password).first ()
        if user:
            token = create_access_token(identity= user.id)
            return jsonify({"logged": True, "user": user.serialize(), "token": token }) # serialize es para pasar del lenguaje normal al lenguaje json """
        else: 
            return jsonify({"logged": False, "msg": "Usuario no encontrado"})
    else:
        return jsonify({"logged":False, "msg": "Revisa la información"})


@api.route('/register', methods=['POST'])
def register():
    body_username = request.json.get("username")   
    body_email = request.json.get("email")
    body_password = request.json.get("password")
    if body_email and body_password and body_username:
        user = User(email=body_email, password=body_password, username=body_username)
        if user:
            token = create_access_token(identity= user.id)
            db.session.add(user)
            db.session.commit()
            return jsonify({"logged": True, "user": user.serialize(), "token": token }) # serialize es para pasar del lenguaje normal al lenguaje json """
        else: 
            return jsonify({"logged": False, "msg": "Usuario no encontrado"})
    else:
        return jsonify({"logged":False, "msg": "Revisa la información"})
