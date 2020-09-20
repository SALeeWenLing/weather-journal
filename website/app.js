/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=metric&APPID=df36e04df26438b569e3497849b73d56';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener for the element with the id: generate, with a callback function to execute when it is clicked.
document.getElementById('generate').addEventListener('click', performAction);

// GET request to the Open Weather info API. This is a callback function to call your async GET request with the parameters: base url, user entered zip code (see input in html with id zip), personal API key
function performAction(e){
  // Assign variables to HTML Elements
  const newZip =  document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  getWeatherData(baseURL, newZip, apiKey)
  .then(function(data) {
    postData('http://localhost:8000/addData', {date:newDate, temp:data.main.temp, userResponse:feelings})
    updateUI();
  })
  .then
    updateUI();
}

// Async function that uses fetch() to make a GET request to the OpenWeatherMap API.
const getWeatherData = async (baseURL, newZip, apiKey)=>{
  // Await response from API
  const res = await fetch(baseURL+newZip+apiKey)
  try {
    const data = await res.json();
    return data;
  } catch(error) {
    console.log("error", error);
  };
};

// Async function that uses fetch() to make a POST request to add the API data, as well as data entered by the user, to your app.
// Attributes: 1) url to make post to, 2) JS object holding data to post
const postData = async ( url = '', data = {})=>{
  const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
    });

  try {
    // Convert to JSON
    const newData = await res.json();
    return newData;
  // catches the error
  } catch(error) {
      console.log("error", error);
  };
};

// Updates the UI dynamically
const updateUI = async ( url = '') => {
  // Awaits to retrieve data from app
  const req = await fetch('/allData');

  try{
    // Convert to JSON
    const allData = await req.json();
    // Select elements and update the divs in HTML
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].userResponse;
  // catches the error
  } catch(error){
      console.log("error", error);
  }
}
