#!/usr/bin/env python
# encoding: utf-8

from flask import abort, render_template, request, jsonify
from app import app, db, models

@app.route('/')
@app.route('/index')
def index():
    user = {
        'nickname': 'Desgard_Duan',
    }
    return render_template("index.html",
        title = 'Home',
        user = user)


@app.route('/api/v1.0/user', methods=['GET'])
def getUser():
    result = []
    for user in models.User.query.all():
        result.append(user.user2Dict())
    return jsonify({'result':  result})


