from . import main

@main.route('/')
def index():
    return '<h1>Guardia API</h1>'

