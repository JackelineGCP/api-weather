const express = require('express');
const router = express.Router();


const ForecastIo = require('forecastio');
const weather = new ForecastIo("a14cca2f70339f801e6453d6bd33c56a");

router.get('/', (req,res) => {
    res.render('index')
});

router.get('/latitude/:latitude/longitude/:longitude', (req, res) => {
    console.log(req.params.latitude, req.params.longitude);
    if(!req.params.latitude || !req.params.longitude){
        res.status(404).join({
            msg: 'error'
        });
    }

    let latitude = parseInt(req.params.latitude, 10);
    let longitude = parseInt(req.params.longitude, 10); 

    weather.forecast(latitude, longitude, (err, data) => {
        if(err){
            next();
            return;
        }
        res.json({
            temperature: data.currently.temperature,
            timezone: data.timezone
        });
    });
    
    res.end('recibido');
})
module.exports = router;