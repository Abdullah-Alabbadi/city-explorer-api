/* eslint-disable no-undef */

const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
require('dotenv').config();
const wetherCtrl = require('./controller/weather.control');
const indexCtrl = require('./controller/index.control');
const moviesCtrl = require('./controller/moves.control');
const cors = require('cors');
const PORT = process.env.PORT;
app.use(cors());
app.get('/', indexCtrl);
app.get('/movies', moviesCtrl);

app.get('/weather', wetherCtrl);
app.listen(PORT);


// const express = require('express'); // require the express package
// const app = express(); // initialize your express app instance
// require('dotenv').config();
// const weatherCont = require('./controller/weather.control');
// const indexControl = require('./controller/index.control');
// const x = require('./controller/moves.control');
// const cors = require('cors');
// // const axios = require('axios');
// // const { request, response } = require('express');
// const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
// app.use(cors());

// const PORT = process.env.PORT;
// // a server endpoint
// app.get('/', indexControl);

// app.get('/movies',x);

// app.get('/weather-data',weatherCont);



// app.listen(PORT);

