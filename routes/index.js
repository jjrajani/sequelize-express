var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  models.Place.findAll({
    include: [ models.Link ]
  }).then(function(places) {
    res.render('index', {
      title: "humdrum's List of Places",
      places: places.sort(function(a, b) {
        return a.desire > b.desire
        ? -1 : 1;
      })
    });
  });
});

module.exports = router;
