class Forecast {
  constructor(weatherData) {
    this.date = weatherData.valid_date,
    this.description = weatherData.weather.description;
  }
}

// eslint-disable-next-line no-undef
module.exports = Forecast;
