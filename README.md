# Weather-Journal App

## Overview
Asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Languages
JavaScript

## Files
server.js
- GET route that returns the projectData object in your server code
- POST route that adds incoming data to projectData

app.js
- Async function that uses fetch() to make a GET request to the OpenWeatherMap API.
- Event listener for the element with the id: generate, with a callback function to execute when it is clicked.
- Promise that makes a POST request to add the API data, as well as data entered by the user, to your app.
- Promise that updates the UI dynamically

## Tasks
- Setup a Node environment with Express and the necessary project dependencies.
- Setup a server with GET and POST routes.
- Create developer credentials for a Web API.
- Use the Fetch API with my credentials and user input to get dynamic data into my app routes.
- Access a GET route on the server side, from a function called on the client side.
- Chain Promises together.
- Access HTML elements with JavaScript and set their properties dynamically.
