from flask import Flask, redirect, url_for, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/table")
def table():
    return render_template("table.html")

if __name__ == "__main__":
    app.run(debug=True)

# connection via sqlalchemy, establish session, then query - ref week 10 day 3 activity 11,10