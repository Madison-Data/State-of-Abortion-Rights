State of Abortion Rights
Project 3 for Georgia Tech Data Science Bootcamp

## Objective
This project aims to provide information related to abortion policies in the US following the US Supreme Court's decision in Dobbs v. Jackson, which overturned the Court's 1973 decision in Roe v. Wade, which affirmed the constitutional right to abortion. The decision in the Dobbs case, however, found that a right to an abortion is not protected in the constitution. Essentially, the Court decided that access to abortion was left to the states, in absense of an explicit federal protection. 

## Extract, Transform, Load
### Extract
The data source for the information contained herein is the Guttmacher Institute, an organization that surveys abortion providers and tracks state regulations for abortions. Much of the information used here can be downloaded from Guttmacher's Data Center, however, the majority of the site's most current data is from 2017. The Institute had 2020 data for the number of abortions and the abortion rate per 1,000 women available on state profile pages, which we scraped and merged with the 2017 data available form the data center. 

### Transform
Our group used Python to merge the 2017 data with the 2020 webscrape data, leaning heavily on the Pandas library. We pushed the cleaned dataset into postgresSQL, which was read by our flask (app.py) application in order to power the webpage. 

### Load
Using flask, we created an API route to call our postgresSQL data as well as routes for our homepage (index.html), and the page for the table of information.

## Javacript Visualizations
We used the Leaflet library to power the interactive map, which offers three views of data per state: The Number of Abortions Obtained in 2020, the Restrictive Category of the state (a determination from Guttmacher), and the Abortion Rate per 1,000 Women of Reproductive Age. A current challenge in the map is making the new data appear upon clicking the buttons designated for each view. To view the new data, run your mouse over the states to reveal the new color scheme related to button clicked. 

Using the Charts.js library, we also incorporated a dynamic pie chart which shows the racial breakdown of women of reproductive age (WORA) per state. Users can filter to a specific state and compare the demographics to one of the views of the map. 

We included a table of our data that contains the 70+ fields available in the combined dataset
