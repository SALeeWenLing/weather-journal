/* Global Variables */
let baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&units=metric&APPID=df36e04df26438b569e3497849b73d56';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const newZip =  document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  getWeather(baseURL,newZip, apiKey)

    .then(function(data) {
      console.log(data);
      postData('/addData', {date:newDate, temp:data.main.temp, content:feelings})
      updateUI();
    })
}

const getWeather = async (baseURL, zip, apiKey)=>{

  const res = await fetch(baseURL+zip+apiKey)
  try {
    const data = await res.json();
    console.log(data)
    return data;
  } catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async ( url = '', data = {})=>{
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch(error) {
      console.log("error", error);
    // appropriately handle the error
  }
}

const updateUI = async () => {
  const request = await fetch('"http://localhost:8000/allData');

  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData[0].date;
    document.getElementById('temp').innerHTML = allData[0].temp;
    document.getElementById('content').innerHTML = allData[0].content;
  } catch(error){
      console.log("error", error);
  }
}
