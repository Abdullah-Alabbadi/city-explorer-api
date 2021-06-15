/* eslint-disable no-undef */
const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const weatherData = require('./assets/data.json');
const cors = require('cors');

app.use(cors()); // after you initialize your express app instance

require('dotenv').config();
const port = process.env.port;
// a server endpoint
app.get('/', // our endpoint name
  function (req, res) { // callback function of what we should do with our request
    res.send('Hello World'); // our endpoint function response
  });
app.get('/abdullah', (request, response) => {

  response.send('marhaba');
}

);

app.get('/weather-data', (request, response) => {
  const renderData = weatherData.data.map(object => new Forecast(object));
  response.json(renderData);
});

class Forecast{
  constructor(weatherData){
    this.date= weatherData.valid_date,
    this.description= weatherData.weather.description;
  }
}


app.listen(port); // kick start the express server to work
