from flask import Flask, redirect, url_for, render_template
from email.utils import collapse_rfc2231_value
import numpy as np
import sqlite3

import sqlalchemy
import pandas as pd
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///abortion_db_sql.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# abortion = Base.classes.df_abortion_sql


app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/table")
def table(): 
    conn = sqlite3.connect("DataFiles/abortion.db")
    df = pd.read_sql("select State from df_abortion_sql",con=conn)
    return jsonify(df.to_dict())
    #return render_template("table.html")


if __name__ == "__main__":
    app.run(debug=True)

# @app.route("/api/v1.0/abortion_all")
# def all():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all passenger names"""
#     # Query all passengers
#     results = session.query(abortion).all()


#     session.close()

# connection via sqlalchemy, establish session, then query - ref week 10 day 3 activity 11,10