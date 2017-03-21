var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./TokenMapping');
var jsonUtil = require('../util/jsonUtil');
require('../util/timeUtil');
var crypto = require('crypto');
// var Promise = require('promise');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {

	createAppVersion: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			var param;
			if(req.method == "GET"){
				param = req.query;
			}else {
				param = req.body;
			}

			var CreateTime = new Date().Format("yyyy-MM-dd h:m:s");
			var UpdateTime = CreateTime;
			
			
			var iosAppVersion = param.iosAppVersion;
			var androidAppVersion = param.androidAppVersion;
			if(typeof iosAppVersion !== 'undefined' && iosAppVersion != "" && 
				iosAppVersion != " ") {
				var iosSha1 = crypto.createHash('sha1');
				iosSha1.update(iosAppVersion + UpdateTime);
				iosToken = iosSha1.digest('hex');
				connection.query($sql.createAppVersion,
					["IOS", iosAppVersion, iosToken, CreateTime, UpdateTime],
					function(err, result) {
	                    jsonUtil.jsonInsert(res, result, err);
	                    connection.release();
	            });
			}

			if(typeof androidAppVersion !== 'undefined' && androidAppVersion != "" && 
				androidAppVersion != " ") {
				var androidSha1 = crypto.createHash('sha1');
				androidSha1.update(androidAppVersion + UpdateTime);
				androidToken = androidSha1.digest('hex');
				connection.query($sql.createAppVersion,
					["Android", androidAppVersion, androidToken, CreateTime, UpdateTime],
					function(err, result) {
	                    jsonUtil.jsonInsert(res, result, err);
	                    connection.release();
	            });
			}

			
		});
	},

	isToken: function (req, res, next) {
		pool.getConnection(function(err, connection) {

			var param;
			if(req.method == "GET"){
				param = req.query;
			}else {
				param = req.body;
			}

			connection.query($sql.queryByAccessToken,
				[param.AccessToken],
				function(err, result) {
					result = JSON.parse(JSON.stringify(result));
                    connection.release();
                    return result[0].AccessToken;
            });			
		});
	},

	getToken: function (req, res, next) {
		pool.getConnection(function(err, connection) {
			var param;
			if(req.method == "GET"){
				param = req.query;
			}else {
				param = req.body;
			}
			console.log("这是param" + JSON.stringify(param));

			var AppVersion = param.AppVersion;
			var PhoneOS;
			var headers = JSON.stringify(req.headers);
			var token="";

			if(headers.indexOf("Android") != -1){
				console.log("是Android系统");
				PhoneOS = 'Android';
			}
			if(headers.indexOf("iOS") != -1 || headers.indexOf("iPhone") != -1 
				|| headers.indexOf("iPod") != -1 || headers.indexOf("iPad") != -1
				|| headers.indexOf("iTouch") != -1 ){
				console.log("是iPhone系统");
				PhoneOS = 'IOS';
			}
			if(headers.indexOf("Macintosh") != -1){
				console.log("是Mac系统");
				PhoneOS = 'IOS';
			}

			console.log("这是AppVersion" + AppVersion);
			

			connection.query($sql.queryByAppVersion,
				[PhoneOS, AppVersion],
				function(err, result) {
					console.log("这是result" + JSON.stringify(result));

                    jsonUtil.resToken(res, result);
            });
            connection.release();

		});
	},

	updateAllToken: function(req, res, next) {
		pool.getConnection(function(err, connection) {

			var UpdateTime = new Date().Format("yyyy-MM-dd h:m:s");

			var promise = new Promise(function (resolve, reject) {
			  	connection.query($sql.queryAll,
					function(err, result) {
						if (err) reject(err);
			    		else resolve(result);
	            });
			});

			promise.then(function(result) {
				result = JSON.parse(JSON.stringify(result));
				for (i in result){
					var Sha1 = crypto.createHash('sha1');
					Sha1.update(result[i].AppVersion + UpdateTime);
					AccessToken = Sha1.digest('hex');
					connection.query($sql.updateTokenById,
						[AccessToken, UpdateTime, result[i].id],
						function(err, result) {
		            });
				}
			}, function(err) {

			});

			connection.release();

			res.send("成功更新所有AccessToken");
		});
	},

	queryAll: function(req, res, next) {

		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll,
				function(err, result) {
                	result = JSON.parse(JSON.stringify(result));
                	var params = {
                		result:result
                	}
                	res.render('token/tokens', params);
            });
            connection.release();
		});
	},

	queryAllAccessToken: function(req, res, next) {

		pool.getConnection(function(err, connection) {
			connection.query($sql.queryAll,
				function(err, result) {
                	res.send(result);
            });
            connection.release();
		});

	},

	deleteByAppVersion: function(req, res, next) {
		var param;
		if(req.method == "GET"){
			param = req.query;
		}else {
			param = req.body;
		}

		pool.getConnection(function(err, connection) {
			connection.query($sql.deleteByAppVersion,
				[param.AppVersion],
				function(err, result) {
					jsonUtil.jsonDelete(res, result);
                    connection.release();
            });
		});
	},

	updateByAppVersion: function(req, res, next) {
		var param;
		if(req.method == "GET"){
			param = req.query;
		}else {
			param = req.body;
		}

		pool.getConnection(function(err, connection) {
			var UpdateTime = new Date().Format("yyyy-MM-dd h:m:s");

			var Sha1 = crypto.createHash('sha1');
			var AppVersion = param.AppVersion;
			Sha1.update(AppVersion + UpdateTime);
			var AccessToken = Sha1.digest('hex');

			connection.query($sql.updateByAppVersion,
				[AccessToken, UpdateTime, AppVersion],
				function(err, result) {
	                jsonUtil.jsonUpdate(res, result);
	                connection.release();
            });
		});
	},

};
