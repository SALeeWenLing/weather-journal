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
