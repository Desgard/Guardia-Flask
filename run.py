#!/usr/bin/env python
# encoding: utf-8

from app import db, app, models
from flask_admin import Admin, BaseView, expose, AdminIndexView
from flask_admin.contrib.sqla import ModelView
from flask_babel import Babel


admin = Admin(app)
admin.add_view(ModelView(models.User, db.session))
admin.add_view(ModelView(models.Article, db.session))
babel = Babel(app)
app.config['BABEL_DEFAULT_LOCALE'] = 'zh_CN'
app.config['SECRET_KEY'] = '123456'
app.run(debug = True)
