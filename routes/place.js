var models = require("../models");
var express = require('express');
var router = express.Router();

/* GET place page. */
router.get('/:place_id', function(req, res) {
  models.Place.findOne({ where: {id: req.params.place_id},
    include: [ models.Link ]
  }).then(function(place) {
    renderPlace(res, place);
  });
});

/* POST update place. */
router.post('/:place_id/update', function(req, res) {
  let update = validateUpdate(req.body);
  models.Place.update(update, { where: {id: req.params.place_id}
  }).then(function(place) {
    console.log("===================")
    console.log("===================")
    console.log("===================")
    console.log("after update", place)
    console.log("===================")
    console.log("===================")
    console.log("===================")
    // renderPlace(res, place);
    res.redirect('/place/' + place);
  });
});




var renderPlace = function(res, place) {
  res.render('place', {
    title: "humdrum's List of Places",
    place: place
  });
}

var validateUpdate = function(body) {
  let update = {};
  Object.keys(body).forEach((key) => {
    if (body[key] !== "") {
      update[key] = body[key];
    }
  });
  return update;
}

module.exports = router;
