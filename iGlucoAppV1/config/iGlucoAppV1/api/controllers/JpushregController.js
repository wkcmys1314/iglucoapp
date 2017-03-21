"use strict";

/**
 * JpushregController
 * @description :: Server-side logic for ...
 */

// JSON.stringify()
// JSON.parse()
const const_val = require('../../const');
const Joi = require('joi');
const request = require('superagent');
const utils = require('utility');

const base_url_reg = const_val.base_url_reg;
const base_url_reg_override = const_val.base_url_reg_override;
const base_url_cou = const_val.base_url_cou;

const func = sails.config.func;

const selection = function (req, res) {
	
	request
		.get(base_url_reg + "selection")
	  	.end(function(err, result){
	  		var data = JSON.parse(result.text).data;
	  		data = utils.base64encode(JSON.stringify(data), true);
	  		res.ok(data);
	  		// res.ok(JSON.parse(result.text).data);
  		});
}

const selection_ = function (req, res) {
		var CN_arr = ["CN"];
		var EU_arr = ["GB", "DE", "IT", "NL", "BE", "LU", "DK", "IE", "GR", "PT", "ES", "AT", 
			"SE", "FI", "MT", "CY", "PL", "HU", "CZ", "SK", "SI", "EE", "LV", "LT", "RO",
			"BG" ];

		request
			.get(base_url_reg + "selection_")
		  	.end(function(err, result){

			  	if(result){
			  		// console.log("有结果：" + JSON.stringify(result))
			  		var selections = JSON.parse(result.text).data;
			  		var PhoneRegions_arr = selections.PhoneRegions_;

			  		// selections.PhoneRegions = {};
			  		// selections.PhoneRegions.CN = CN_arr;
	  				// selections.PhoneRegions.EU = EU_arr;
	  				// selections.PhoneRegions.US = US_arr

	  				
			  		var CN_str = func.arr2Str(CN_arr);
			  		var EU_str = func.arr2Str(EU_arr);
			  		// var is_inc = CN_str.toUpperCase().includes("android");
			  		// selections.PhoneRegions = new Array();
			  		selections.PhoneRegions = {};
			  		selections.PhoneRegions.CN = new Array();
	  				selections.PhoneRegions.EU = new Array();
	  				selections.PhoneRegions.US = new Array();

			  		for(var key in PhoneRegions_arr) {
			  			var value = PhoneRegions_arr[key];

			  			if(CN_str.toUpperCase().includes(value)){
			  				// console.log(value + "属于CN")
			  				selections.PhoneRegions.CN.push(value);
			  				// selections.PhoneRegions.CN = func.arr_splice_null(selections.PhoneRegions.CN);
			  			}else if(EU_str.toUpperCase().includes(value)){
			  				// console.log(value + "属于EU")
			  				selections.PhoneRegions.EU.push(value);
			  				// selections.PhoneRegions.EU = func.arr_splice_null(selections.PhoneRegions.EU);
			  			}else {
			  				// console.log(value + "属于US")
			  				selections.PhoneRegions.US.push(value);
			  				// selections.PhoneRegions.US = func.arr_splice_null(selections.PhoneRegions.US);
			  			}
			  			
			  		}

			  		selections.Applications = new Array();
			  		selections.Applications.push("血糖");
			  		selections.Applications.push("血压");

			  		res.ok(selections)

			  	}else {
			  		// console.log("没有结果：" + JSON.stringify(err))
			  		res.badRequest(err);
			  	}
		  	});

	}

module.exports = {

	selection(req, res){
		selection(req, res);
		
	},

	selection_(req, res){
		selection_(req, res);
	},

	upload(req, res) {

		var params = req.body;

		var promise = new Promise(function (resolve, reject) {
			try {
		    	if(req.method=="POST"){
					var jpushreg = JSON.parse(params.jpushreg);
					resolve(jpushreg);
				}else {
					res.notFound();
				}
		  	} catch(e) {
			    reject(e);
		  	}
			
		});


		promise.then(function(jpushreg) {


			request
		      .get(base_url_reg + "?registration_id=" + jpushreg.registration_id)
		      .end(function(err, result){
		      	// console.log(base_url_reg + "?registration_id=" + jpushreg.registration_id);

		      	// console.log("result.status: " + result.status);
		      	// console.log("result.text: " + result.text);

		      	if (result.status == 200) {
					console.log("已经有数据了，此时应该update");
					var jpushreg_ = JSON.parse(result.text).data;
					var id_ = jpushreg_.id;

					/*console.log("length: " + jpushreg_.length);
					res.ok(jpushreg_);*/
					
					request
						.put(base_url_reg_override)
					  	.send(jpushreg)
					  	.end(function(err, result){
						  	if(result){
						  		// var data = JSON.parse(result.text).data;
						  		// res.ok(data)
						  		res.status(result.status).jsonx(JSON.parse(result.text))
						  	}
					  	});

				}else if(result.status == 404){
					console.log("还没有数据，此时应该create");
					request
					    .post(base_url_reg)
					  	.send(jpushreg)
					  	.end(function(err, result){
					  		if(result){
					  			console.log(JSON.stringify(result));
					  			// var data = JSON.parse(result.text).data;
					  			res.status(result.status).jsonx(JSON.parse(result.text))
						  	}
				  		});

				}else {
					res.notAcceptable();
				}

	      	});
		});

		promise.catch(function(error) {
			console.log(error);
			res.notAcceptable();
		});
		
	},

	report(req, res) {
		var where = JSON.stringify({Aid: 3});
		request
			.get(base_url_cou + "?limit=300")
		  	.end(function(err, result){
		  		if(err){
		  			res.badRequest(err);
		  		}else{
		  			var countries = JSON.parse(result.text).data;
		  			for(var key in countries){
		  				// console.log(JSON.stringify(countries[key]));
		  				console.log(countries[key].CountryCode);
		  			}
		  		}
		  	});
	}

};
