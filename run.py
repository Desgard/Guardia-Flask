#!/usr/bin/env python
# encoding: utf-8

from app import db, app, models
from flask_admin import Admin, BaseView, expose, AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask_babel import Babel
from flask_sqlalchemy import SQLAlchemy

admin = Admin(app)
admin.add_view(ModelView(models.User, db.session))
admin.add_view(ModelView(models.Article, db.session))
babel = Babel(app)
app.config['SECRET_KEY'] = '123456'

db = SQLAlchemy(app)

app.run(debug = True)
