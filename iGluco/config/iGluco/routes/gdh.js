var express = require('express');
var router = express.Router();

var StripTypeDao = require('../dao/StripTypeDao');
var GdhInfoDao = require('../dao/GdhInfoDao');
var util = require('../util/util');
var jsonUtil = require('../util/jsonUtil');
var TokenDao = require('../dao/TokenDao');


router.route('/gdh/queryAll')
.all(function(req, res, next) {
    StripTypeDao.queryAll(req, res, next);
});


router.get('/gdh/updateAll', function(req, res) {
    console.log("到这里了");
    StripTypeDao.updateAll(req, res);
});

router.get('/gdh/updateByCountryCode', function(req, res) {
    console.log("到这里了");
    StripTypeDao.updateByCountryCode(req, res);
});


router.route('/gdh/queryByCountryCode')
.all(function(req, res, next) {
    StripTypeDao.queryByCountryCode(req, res, next);
});

router.route('/gdh/insertGdhInfo')
.all(function(req, res, next) {
    GdhInfoDao.insertGdhInfo(req, res, next);
});

router.route('/gdh/queryGdhInfoAll')
.all(function(req, res, next) {
    GdhInfoDao.queryGdhInfoAll(req, res, next);
});


module.exports = router;
