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
        user = user
    )


@app.route('/api/v1.0/getUsers', methods=['GET'])
def getUsers():
    result = []
    for user in models.User.query.all():
        result.append(user.user2Dict())
    return jsonify({'result': result})

@app.route('/api/v1.0/getPosts', methods=['GET'])
def getPosts():
    result = []
    for post in models.Article.query.all():
        result.append(post.article2Dict())
    return jsonify({'result': result})

