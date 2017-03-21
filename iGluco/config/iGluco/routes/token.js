var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var sha1 = crypto.createHash('sha1');
// var AES = require("crypto-js/aes");
var fs = require('fs-extra');
var pathUtil = require('../util/pathUtil');
var key = "iGluco";
require('../util/timeUtil');
var jsonUtil = require('../util/jsonUtil');
var TokenDao = require('../dao/TokenDao');
var schedule = require('node-schedule');
var request = require('superagent');

function getIosToken (req){

	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}
	var iosAppId = param.AppId;
	var file = pathUtil.tokenPath + "iosToken.txt";
	var date = new Date().Format("yyyy-MM-dd");
    var data = fs.readJsonSync(file);
    var iosToken = "";

	if(typeof iosAppId === 'undefined' || iosAppId=="" || 
		iosAppId==" " || iosAppId != data.iosAppId) {
		// iosAppId = "ios1.1";
		return ' ';
	}
	
	if(date != data.date || iosAppId != data.iosAppId) {
		sha1.update(iosAppId + date);
		iosToken = sha1.digest('hex');
		fs.outputJson(file, {date:date, iosAppId: iosAppId ,iosToken: iosToken}, function (err) {
		  	// console.log(err); // => null
		});
	}else {
		iosToken = data.iosToken;
	}
	
	return iosToken;

}

function getAndroidToken (req) {

	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}
	var androidAppId = param.AppId;
	var file = pathUtil.tokenPath + "androidToken.txt";
	var data = fs.readJsonSync(file);
	var date = new Date().Format("yyyy-MM-dd");
	var androidToken = "";

	console.log("这是参数appid： " + androidAppId);
	console.log("这是文件appid： " + data.androidAppId);
	if(typeof androidAppId === 'undefined' || androidAppId=="" || 
		androidAppId==" " || androidAppId != data.androidAppId) {
		// androidAppId = "android1.1";
		return ' ';
	}
	
	if(date != data.date || androidAppId != data.androidAppId) {
		sha1.update(androidAppId + date);
		androidToken = sha1.digest('hex');
		fs.outputJson(file, {date:date, androidAppId: androidAppId ,androidToken: androidToken}, function (err) {
		  	// console.log(err); // => null
		});
	}else {
		androidToken = data.androidToken;
	}
	return androidToken;
}

router.route('/token/getToken')
.all(function(req, res, next) {
	/*var headers = JSON.stringify(req.headers);
	var token="";
	if(headers.indexOf("Android") != -1){
		console.log("是Android系统");
		token = getAndroidToken(req);
	}
	if(headers.indexOf("iPhone") != -1){
		console.log("是iPhone系统");
		token = getIosToken(req);
	}
	if(headers.indexOf("Macintosh") != -1){
		console.log("是Mac系统");
		token = getIosToken(req);
	} 
	jsonUtil.resToken(res, token);*/
	// res.send("系统维护中");
	TokenDao.getToken(req, res, next);
});

router.route('/token/queryAllAccessToken')
.all(function(req, res, next) {

	/*var params = {
		androidAppId: fs.readJsonSync(pathUtil.tokenPath + "androidToken.txt").androidAppId,
		iosAppId: fs.readJsonSync(pathUtil.tokenPath + "iosToken.txt").iosAppId
	};
	res.render('token/tokens', params);
	*/
	TokenDao.queryAllAccessToken(req, res, next);
	
	// res.send("系统维护中");
});

router.route('/token/tokens')
.all(function(req, res, next) {

	/*var params = {
		androidAppId: fs.readJsonSync(pathUtil.tokenPath + "androidToken.txt").androidAppId,
		iosAppId: fs.readJsonSync(pathUtil.tokenPath + "iosToken.txt").iosAppId
	};
	res.render('token/tokens', params);
	*/
	// TokenDao.queryAll(req, res, next);
	res.send("测试页面已关闭");
	// res.send("系统维护中");
});

router.route('/token/setToken')
.all(function(req, res, next) {
	
	TokenDao.createAppVersion(req, res, next);
	/*
	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}
	var date = new Date().Format("yyyy-MM-dd");
	var iosAppId = param.iosAppId;
	var androidAppId = param.androidAppId;
	var androidFile = pathUtil.tokenPath + "androidToken.txt";
	var iosFile = pathUtil.tokenPath + "iosToken.txt";
	var androidToken = fs.readJsonSync(androidFile, {throws: false}).androidToken;
	var iosToken = fs.readJsonSync(iosFile, {throws: false}).iosToken;
	if(typeof androidAppId !== 'undefined' && androidAppId != "" && 
		androidAppId != " " ) {
		fs.outputJsonSync(androidFile, {date:date, androidAppId: androidAppId ,androidToken: androidToken});
	}
	if(typeof iosAppId !== 'undefined' && iosAppId != "" && 
		iosAppId != " " ) {
		fs.outputJsonSync(iosFile, {date:date, iosAppId: iosAppId ,iosToken: iosToken});
	}*/

});	

router.route('/token/updateAllToken')
.all(function(req, res, next) {

	TokenDao.updateAllToken(req, res, next);

});	

// router.route('/token/crontab')
// .all(function(req, res, next) {

// 	var rule = new schedule.RecurrenceRule();
// 　　 rule.dayOfWeek = [0, new schedule.Range(1, 6)];
// 　　 rule.hour = 1;
// 　　 rule.minute = 0;
// 　　 var j = schedule.scheduleJob(rule, function(){
// 		request
// 		.post('/token/updateAllToken')
// 		.end(function(err, sres){
// 　　 		console.log(new Date().Format("yyyy-MM-dd h:m:s") + sres.text);
// 		    // res.send(sres.text);
// 		});
// 　　 });

// });	

router.route('/token/deleteByAppVersion')
.all(function(req, res, next) {

	TokenDao.deleteByAppVersion(req, res, next);

});	

router.route('/token/updateByAppVersion')
.all(function(req, res, next) {

	TokenDao.updateByAppVersion(req, res, next);

});	

module.exports = router;
