from app import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    nickname = db.Column(db.String(64), index = True, unique = True)
    email = db.Column(db.String(120), index = True, unique = True)

    def __init__(self, nickname = "", email = ""):
        self.nickname = nickname
        self.email = email

    def __repr__(self):
        return '<User %r>' % (self.nickname)

    def user2Dict(self):
        return {
            "id": self.id,
            "nickname": self.nickname,
            "email": self.email,
        }

class Article(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(80))
    author = db.Column(db.String(20))
    body = db.Column(db.Text)
    pub_date = db.Column(db.DateTime)

    def __init__(self, title, author, body, read_cnt, pub_date = None):
        self.title = title
        self.author = author
        self.body = body
        self.read_cnt = read_cnt
        if pub_date is None:
            self.pub_date = datetime.utcnow()

    def __repr__(self):
        return '<Article-%d %r>' % (self.id, self.title)

    def article2Dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "author": self.author,
            "body": self.body,
            "read_cnt": self.cnt,
            "pub_date": self.pub_date,
        }
