var express = require('express');
var router = express.Router();

var BottleDao = require('../dao/BottleDao');

router.route('/bottle/queryAll')
.all(function(req, res, next) {
	BottleDao.queryAll(req, res, next);
}); 

router.route('/bottle/updateByStripCode')
.all(function(req, res, next) {
	BottleDao.updateByStripCode(req, res, next);
}); 

router.route('/bottle/updateAll')
.all(function(req, res, next) {
	BottleDao.updateAll(req, res, next);
});

module.exports = router;