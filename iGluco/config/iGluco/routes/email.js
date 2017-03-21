var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('../dao/TokenMapping');
var jsonUtil = require('../util/jsonUtil');
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
var request = require('superagent');

router.route('/email/sendMailPassword')
.all(function(req, res, next) {

	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}

	var email = param.email;
	var CountryCode = param.CountryCode;
	
	var promise = new Promise(function (resolve, reject) {
        pool.getConnection(function(err, connection) {
	        connection.query($sql.queryByAccessToken,
	            [param.AccessToken],
	            function(err, result) {
	                result = JSON.parse(JSON.stringify(result));
	                if (err) {
	                    reject(err);
	                }
	                else if(typeof result !== 'undefined' && result != "" 
	                    && result != " " &&  result != null){
	                   resolve(result[0].AccessToken); 
	                }else {
	                   jsonUtil.badToken(res);
	                }
	        });
	        connection.release();
	    });
    });

	promise.then(function(AccessToken){
		if(typeof AccessToken !== 'undefined' && AccessToken != "" 
            && AccessToken != " " &&  AccessToken != null){

			request
			  .get("http://127.0.0.1/iGlucoPhp/sendcloud/sendMailPassword.php?to=" 
				+ email + "&CountryCode=" + CountryCode)
			  // .send({ mobile: mobile, ECode: ECode })
			  // .set('Accept', 'application/json')
			  .end(function(err, ares){
			  	res.send(ares.text);
			  });
			
		}
		
	});

});

module.exports = router;

