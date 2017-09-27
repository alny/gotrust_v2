var Verify = require('../models/Verify')
var express = require('express');
var router = express.Router();


router.get('/active', function(req, res, next) {
  Verify.find({})
  .sort('-trades')
  .where('status', true)
  .limit(16)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

router.get('/top', function(req, res, next) {
  Verify.find({})
  .sort('-trades')
  .where('status', true)
  .limit(6)
  .exec(function(err, result) {
    if(err) return next()
    res.json({
      confirmation: 'success',
      result: result
    })
  })
})

module.exports = router
