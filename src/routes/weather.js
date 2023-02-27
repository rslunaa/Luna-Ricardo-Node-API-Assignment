var express = require('express');
var router = express.Router();

/*
router.get('/', (req, res) => {
  const weather = {
    Temp: 90.5,
    Unit: 'fahrenheit',
    Cloudy: false,
    PrecipitationChance: 0
  };
  res.json(weather);
});
*/

router.get('/', function(req, res, next) {
  res.render('weather');
});

module.exports = router;
