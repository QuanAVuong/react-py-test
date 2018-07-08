from flask import Flask, render_template
import random

app = Flask(__name__, static_folder="../static/dist", template_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/greetings")
def get_greetings():
    greetings = ["Welcome", "Bienvenue", "Willkommen", "Bienvenido", "Benvenuto", "Kuwakaribisha", "Bonvenon"]
    return random.choice(greetings)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)