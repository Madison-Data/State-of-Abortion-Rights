from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/index.html")
def home():
    return render_template("index.html")

@app.route("/table.html")
def table():
    return render_template("table.html")

if __name__ == "__main__":
    app.run()