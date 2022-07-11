#import dependencies
import pandas as pd
import numpy as np
from sqlalchemy import create_engine

#read in abortion data by state
#data ends in 2017
abortion_facts = pd.read_csv('GuttmacherDataCenter.csv')

#rename column "summary" to "shootings"
abortion_facts = abortion_facts.rename(columns={"U.S. State":"State"})

# Set option to display all rows
pd.set_option('display.max_rows', None)

#read in abortion data by state
#data ends in 2017
abortion_state = pd.read_csv('Guttmacher_Webscrape.csv')

#do an inner join to merge data frames on state
df_abortion = pd.merge(abortion_facts, abortion_state, how="inner",on=["State"])

#clean up the columns
df_abortion.columns=df_abortion.columns.str.replace(","," ")
df_abortion.columns = [x.replace('No. of women who likely need public support for contraceptive services and supplies','services needed:') for x in df_abortion.columns]

#establish the connection to postgresql
protocol = 'postgresql'
username = 'postgres'
password = 'admin'
host = 'localhost'
port = 5432
database_name = 'abortion_db_sql'
rds_connection_string = f'{protocol}://{username}:{password}@{host}:{port}/{database_name}'
engine = create_engine(rds_connection_string)

#create table in sql
#check table exists
engine.table_names()

#upload dataframes into sql
df_abortion.to_sql(name='df_abortion_sql', con=engine, if_exists='append', index=True)
pd.read_sql_query("select * from df_abortion_sql", con=engine)