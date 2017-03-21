var express = require('express');
var router = express.Router();
// var yunpainSMSClient = require('yunpian-sms-client');
// var smsProvider = require('yunpian-sms-client').v2;
// var jschars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var jschars = ['0','1','2','3','4','5','6','7','8','9'];

var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('../dao/TokenMapping');
var jsonUtil = require('../util/jsonUtil');
var pool  = mysql.createPool($util.extend({}, $conf.mysql));
var request = require('superagent');

  
/*for(var i=0;i<os.networkInterfaces().eth0.length;i++){  
    if(os.networkInterfaces().eth0[i].family=='IPv4'){  
        IPv4=os.networkInterfaces().eth0[i].address;  
    }  
}*/
router.route('/sms/sendSMSPassword')
.all(function(req, res, next) {

	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}
	var mobile = param.mobile;
	var ECode = param.ECode;

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
			  .get("http://127.0.0.1/iGlucoPhp/yunpian/example/sendSMSPassword.php?mobile=" 
				+ mobile + "&ECode=" + ECode)
			  // .send({ mobile: mobile, ECode: ECode })
			  // .set('Accept', 'application/json')
			  .end(function(err, ares){
			  	res.send(ares.text);
			  });
			
		}
		
	});

});

router.route('/sms/sendSMS')
.all(function(req, res, next) {

	var param;
	if(req.method == "GET"){
		param = req.query;
	}else {
		param = req.body;
	}
	var mobile = param.mobile;
	// var code = generateMixed(4);
	var ECode = param.ECode;

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
			  .get("http://127.0.0.1/iGlucoPhp/yunpian/example/sendSMSVerifycode.php?mobile=" 
				+ mobile + "&ECode=" + ECode)
			  // .send({ mobile: mobile, ECode: ECode })
			  // .set('Accept', 'application/json')
			  .end(function(err, ares){
			  	res.send(ares.text);
			  });
			
		}
		
	});

});

/*function generateMixed(n) {
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random()*9);
        res += jschars[id];
    }
    return res;
}
*/

module.exports = router;
