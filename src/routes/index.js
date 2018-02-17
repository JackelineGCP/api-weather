const express = require('express');
const router = express.Router();

// conectandome a la API
const ForecastIo = require('forecastio');
const weather = new ForecastIo("a14cca2f70339f801e6453d6bd33c56a");

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/latitude/:latitude/longitude/:longitude', (req, res, next) => {
  console.log(req.params.latitude, req.params.longitude);
  if (!req.params.latitude || !req.params.longitude) {
    res.status(404).json({
      msg: 'error'
    });
  }

  // almacenando en una variable 
  let latitude = parseInt(req.params.latitude, 10);
  let longitude = parseInt(req.params.longitude, 10);

  weather.forecast(latitude, longitude, (err, data) => {
    if (err) {
      next();
      return;
    }
    res.json({
      temperature: data.currently.temperature,
      timezone: data.timezone
    });
  });
});
module.exports = router;
