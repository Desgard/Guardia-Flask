from app import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nickname = db.Column(db.String(64), index = True, unique = True)
    email = db.Column(db.String(120), index = True, unique = True)

    def __init__(self, nickname, email):
        self.nickname = nickname
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.nickname)

class Article(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(64), index = True, unique = True)
    author = db.Column(db.String(64), index = True, unique = True)
    body = db.Column(db.Text, index = True, unique = True)
    read_cnt = db.Column(db.Integer, index = True, unique = True)
    pub_date = db.Column(db.DateTime)

    def __init__(self, title, author, body, read_cnt):
        self.title = title
        self.author = author
        self.body = body
        self.read_cnt = read_cnt

    def __repr__(self):
        return '<Article-%d %r>' % (self.id, self.title)
