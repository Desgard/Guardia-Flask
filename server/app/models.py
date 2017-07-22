from flask import Flask, current_app
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from app import db
from flask_login import UserMixin

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True)
    nickname = db.Column(db.String(64), index = True, unique = True)
    email = db.Column(db.String(120), index = True, unique = True)

    def __init__(self, nickname = '', email = ''):
        self.nickname = nickname
        self.email = email

    def __repr__(self):
        return '<User %r - %r>' % (self.nickname, self.email)

    def toDict(self):
        return {
            'id': self.id,
            'nickname': self.nickname,
            'email': self.email,
        }

class Article(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    author = db.Column(db.String(128), index = True)
    title = db.Column(db.String(64), index = True, unique = True)
    pub_date = db.Column(db.DateTime)
    body = db.Column(db.Text)

    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship('Category', backref = db.backref('posts', lazy = 'dynamic'))

    def __init__(self, title = '', body = '', category_id = 1, pub_date = None):
        self.title = title
        self.body = body
        self.category_id = category_id
        if pub_date is None:
            self.pub_date = datetime.utcnow()
        else:
            self.pub_date = pub_date

    def __repr__(self):
        return '<Article %r>' % self.title

    def toDict(self):
        return {
            'title': self.title,
            'author': self.author,
            'public_date': self.pub_date,
            'body': self.body,
            'category': self.category_id,
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(50))

    def __init__(self, name = ''):
        self.name = name

    def __repr__(self):
        return '<Category %r>' % self.name

    def toDict(self):
        return {
            'id': self.id,
            'name': self.name,
        }


