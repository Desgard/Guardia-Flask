#!/usr/bin/env python
# encoding: utf-8

from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def index():
    user = {
        'nickname': 'Desgard_Duan',
    }
    return render_template("index.html",
        title = 'Home',
        user = user)
