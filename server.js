// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();
app.use(cors());

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
  console.log('server running');
  console.log(`running on local host: ${port}`);
}

// GET route that sends all data from the server to the app. Returns the projectData object in your server code
app.get('/allData', function (req, res) {
  res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/addData', addData);

function addData (req, res){
   console.log(req.body);
   projectData = {
     date: req.body.date,
     temp: req.body.temp,
     content: req.body.content,
   }
   projectData.push(newEntry)
}
