/* eslint-disable no-undef */
const axios = require('axios');
const Forecast = require('../models/weather.model');
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const weatherCont = (request, response) => {
  let lat = request.query.lat;
  let lon = request.query.lon;

  const renderData = `http://api.weatherbit.io/v2.0/forecast/daily?key=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}`;
  axios.get(renderData).then(object => {
    const objectData = object.data.data.map(smallObject => new Forecast(smallObject));
    response.json(objectData);

  }).catch(error => {
    response.send(error.message);
  });

};

module.exports=weatherCont;
