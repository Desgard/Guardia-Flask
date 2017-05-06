#!/usr/bin/env python3
# encoding: utf-8

from app import db, app, models
from flask_admin import Admin, BaseView, expose, AdminIndexView
from flask_admin.contrib.sqla import ModelView

admin = Admin(app, name='admin')
admin.add_view(ModelView(models.User, db.session))
admin.add_view(ModelView(models.Article, db.session))
app.run(debug = True)
