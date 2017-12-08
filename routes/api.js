var express = require('express');
var router = express.Router();
var fetch = require('node-fetch')

/* GET github jobs listings in Atlanta */
router.get('/jobs', function(req, res, next) {
  fetch('http://jobs.github.com/positions.json?location=atlanta')
  	.then((response)=>{
  		return response.json();
  	}).then((json)=>{
  		res.json(json);
  	});

});

/* GET individual github job listing in Atlanta */
router.get('/jobs/:id', function(req, res, next) {
  fetch('http://jobs.github.com/positions/' + req.params.id + '.json')
  	.then((response)=>{
  		return response.json();
  	}).then((json)=>{
  		res.json(json);
  	});
});

module.exports = router;
