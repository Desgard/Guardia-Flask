import os

basedir = os.path.abspath(os.path.dirname(__file__))

# 数据库文件路径
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
# SQLAlchemy-migrate 数据文件存储位置
SQLALCHEMY_MIGRATE_REPO = os.path.join(basedir, 'db_repository')
