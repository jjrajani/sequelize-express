var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET place page. */
router.get('/:place_id', function(req, res) {
  models.Place.findOne({ where: {id: req.params.place_id},
    include: [ models.Link ]
  }).then(function(place) {
    _renderPlace(res, place);
  });
});

/* POST update place. */
router.post('/:place_id/update', function(req, res) {
  let update = _validateUpdate(req.body);
  models.Place.update(update, { where: {id: req.params.place_id}
  }).then(function(place) {
    res.redirect('/place/' + place);
  });
});

/* Private Functions */
var _renderPlace = function(res, place) {
  res.render('place', {
    title: "humdrum's List of Places",
    place: place
  });
}

var _validateUpdate = function(body) {
  let update = {};
  Object.keys(body).forEach((key) => {
    if (body[key] !== "") {
      update[key] = body[key];
    }
  });
  return update;
}

module.exports = router;
