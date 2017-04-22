var models = require('../models');
var express = require('express');
var router = express.Router();

/* POST Place listing. */
router.post("/create", function(req, res) {
  models.Place.create({
    title: req.body.title,
    img: req.body.img,
    description: req.body.description,
    desire: req.body.desire
  }).then(function() {
    res.redirect('/');
  }).catch(function(err){
    console.log(err)
  });
});
/* Delete place */
router.get('/:place_id/destroy', function(req, res) {
  models.Place.destroy({
    where: {
      id: req.params.place_id
    }
  }).then(function() {
    res.redirect('/');
  }).catch(function(err){
    console.log(err)
  });
});

router.post('/:place_id/links/create', function(req, res) {
  console.log('create link', req.params)
  models.Link.create({
    displayName: req.body.displayName,
    href: req.body.href,
    PlaceId: req.params.place_id
  }).then(function() {
    res.redirect('/');
  }).catch(function(err){
    console.log(err)
  });
});

router.get('/:place_id/links/:link_id/destroy', function(req, res) {
  models.Link.destroy({
    where: {
      id: req.params.link_id
    }
  }).then(function() {
    res.redirect('/');
  }).catch(function(err){
    console.log(err)
  });
});

module.exports = router;
