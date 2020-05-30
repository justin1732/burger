# Eat Da Burger
## The Heroku Node Burger App

This was the twelfth overall individual project for the University of Denver FullStack Coding Bootcamp.

This app uses Node JS through Heroku Deployment to add and delete items in a database and render the result on the web page. This app also works to identify and use state/categories about that database object to show it on the page as well. The topic/character for this app was to use burgers and mark them as 'eaten' or 'uneaten', and also allow the user to add burgers as necessary. 

## Starting the app locally

For a local version, I recommend using Visual Studio Code. Navigate over to my GitHub repo at https://github.com/justin1732/burger , click clone, and be sure to type in the following below:
git clone
Navigate over to the terminal and open up the area around server.js in the terminal. Then type:
npm install
After all dependencies are loaded, then type:
node server.js

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Starting the app remotely

For remote viewing, my app is on Heroku at:
https://justintuckerburgerpart1.herokuapp.com/

## Using this application

Add a burger by entering your desired burger (no apostrophes or quotation marks) in the blank field and then click "Submit". The burger name will then appear in the "Burgers for Eating" category with a red "EAT DA BURGER" button below them. If you click that, the burger name will now appear under the "Burgers that have been eaten..." category.

## Technologies Used

This application primarily follows Handlebars to use and display the data, and the architecture follows and works with the limits and strengths of Handlebars. This app uses Express as its engine and uses Express-Handlebars to ease transferring data back and forth. This app uses methodOverride and bodyParser to help render the data properly followed my MySQL (with some Sequelize) to serve and handle the database going into Jaws DB. Finally, Boostrap CSS and CSS with ORM were used to display the data properly on the webpage and assist with getting information from the back end to the front end.

## Contact Information
I am available to be found at justteach17@gmail.com and my website is justin1732.github.io 
