/* eslint-disable no-undef */
const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const cors = require('cors');
const axios = require('axios');
const { request, response } = require('express');
require('dotenv').config();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
app.use(cors()); // after you initialize your express app instance

const PORT = process.env.PORT;
// a server endpoint
app.get('/', // our endpoint name
  function (req, res) { // callback function of what we should do with our request
    res.send('Hello World'); // our endpoint function response
  });


app.get('/weather-data', (request, response) => {
  let lat = request.query.lat;
  let lon = request.query.lon;

  const renderData = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
  axios.get(renderData).then(object => {
    const objectData = object.data.data.map(smallObject => new Forecast(smallObject));
    response.json(objectData);

  }).catch(error => {
    response.send(error.message);
  });

});

app.get('/movies', (request, response) => {
  let city = request.query.city;
  const RenderMove = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}`;

  axios.get(RenderMove).then(object => {
    const objectData = object.data.results.map(descriptionMov => new MovieDy(descriptionMov));
    response.json(objectData);
  });

}
);




class Forecast {
  constructor(weatherData) {
    this.date = weatherData.valid_date,
    this.description = weatherData.weather.description;
  }
}

class MovieDy {
  constructor(renderMove) {
    this.overview = renderMove.overview,
    this.vote_average = renderMove.vote_average,
    this.title = renderMove.title,
    this.vote_count = renderMove.vote_count,
    this.poster_path = renderMove.poster_path,
    this.popularity = renderMove.popularity,
    this.release_date = renderMove.release_date;
  }
}



app.listen(PORT);

