// eslint-disable-next-line no-undef
const axios = require('axios');
// eslint-disable-next-line no-undef
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
// eslint-disable-next-line no-undef
const MovieDy = require('../models/moves.model');
const movesControl = (request, response) => {
  let city = request.query.city;
  const RenderMove = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&query=${city}`;

  axios.get(RenderMove).then(object => {
    const objectData = object.data.results.map(descriptionMov => new MovieDy(descriptionMov));
    response.json(objectData);
  });

};
// eslint-disable-next-line no-undef
module.exports = movesControl;
