"use strict";

/**
 * JpushregController
 * @description :: Server-side logic for ...
 */

// JSON.stringify()
// JSON.parse()
const const_val = require('../../const');
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
const _ = require('lodash');
const objectAssign = require('object-assign');
const func = sails.config.func;
const request = require('superagent');
const base_url_cou = const_val.base_url_cou;

module.exports = {

	override(req, res) {
		
		const Model = actionUtil.parseModel(req);

		if(req.method=="GET"){
			
			res.notFound("",{message:"您请求的资源没有找到"});
		
		}else if(req.method=="POST"){
			res.notFound("",{message:"您请求的资源没有找到"});
		}else if(req.method=="PUT"){

			console.log("这是put方法");

			// const pk = actionUtil.requirePk(req);

			// console.log("values: " + JSON.stringify(values));
			// console.log(JSON.stringify(values));

			Model
			    .update({ registration_id : Model.registration_id}, Model)
			    .then(records => records ? res.ok(records) : res.notFound())
			    .catch(res.negotiate);

	      	// res.notFound("",{message:"您请求的资源没有找到"});
	      	// res.ok("PUT");
	    }else if(req.method=="PATCH"){
	      	res.notFound("",{message:"您请求的资源没有找到"});
	      	// res.ok("PATCH");
	    }else if(req.method=="DELETE"){
	      	res.notFound("",{message:"您请求的资源没有找到"});
	      	// res.ok("DELETE");
	    }

	},

	selection(req, res) {
		

		var Application_arr = ["BloodGlucose", "BloodPressure"];
		var Platform_arr = ["iOS", "android"];
		var PhoneLang_arr = ["en", "fr", "de", "es", "it", "tr", "fa", "ar", "hr", "cs", "sk", "zh"];
		var PhoneRegion_arr = ["CN", "EU", "US"];
		var selection_arr = new Array();
		// var Application_key = "";
		// var Application_obj = new Object();
		var Model = actionUtil.parseModel(req);
		var PhoneOS_sql = 'SELECT DISTINCT(PhoneOS) FROM ih_blood_registration_ids where PhoneType=';
		var AppVersion_sql = 'SELECT DISTINCT(AppVersion) FROM ih_blood_registration_ids where PhoneType=';

		var promise = new Promise(function (resolve, reject) {
			try {
		    	if(req.method=="GET"){
					resolve();
				}else {
					res.notFound();
				}
		  	} catch(e) {
			    reject(e);
		  	}
			
		});

		
		promise.then(function() {
			

			for(var key in Application_arr) {

				if(key == 0){
					selection_arr.push({
						Application : [Application_arr[key]],
						[Platform_arr[0]] : {
							"PhoneOSs" : [],
							"AppVersions" : [] 
						},
						[Platform_arr[1]] : {
							"PhoneOSs" : [],
							"AppVersions" : []
						},
						PhoneLangs : PhoneLang_arr,
						PhoneRegions : new Array()
					});

				}
			}
			
			var a = Platform_arr[0];
			var b = Platform_arr[1];

			Model.query(PhoneOS_sql + "'" + a + "'", function(err, results) {
				var arr = func.queryResults2array(results);
				selection_arr[0][a].PhoneOSs = arr;
				Model.query(AppVersion_sql + "'" + a + "'", function(err, results) {
					var arr = func.queryResults2array(results);
					selection_arr[0][a].AppVersions = arr;
					Model.query(PhoneOS_sql + "'" + b + "'", function(err, results) {
						var arr = func.queryResults2array(results);
						selection_arr[0][b].PhoneOSs = arr;
						Model.query(AppVersion_sql + "'" + b + "'", function(err, results) {
							var arr = func.queryResults2array(results);
							selection_arr[0][b].AppVersions = arr;

							

							request
								.get(base_url_cou + "?limit=300")
							  	.end(function(err, result){
							  		if(err){
							  			res.badRequest(err);
							  		}else{
							  			var CN_arr = new Array();
							  			var EU_arr = new Array();
							  			var US_arr = new Array();

							  			var countries = JSON.parse(result.text).data;
							  			for(var key in countries){
							  				// console.log(JSON.stringify(countries[key]));
							  				if(countries[key].Aid == 3){
							  					// 中国
							  					CN_arr.push(countries[key].CountryCode);
							  				}else if(countries[key].Aid == 2){
							  					// 欧洲
							  					EU_arr.push(countries[key].CountryCode);
							  				}else if(countries[key].Aid == 1){
							  					// 美国
							  					US_arr.push(countries[key].CountryCode);
							  				}

							  			}

							  			selection_arr[0].PhoneRegions.push(
											{CN: CN_arr},
											{EU: EU_arr},
											{US: US_arr}
										)
							  			res.ok(selection_arr)
							  		}
							  	});

							
						});
					});
				});
			});


		});
		
	},
	
	selection_(req, res) {
		// var params = req.query;
		// var records = new Array();

		var Model = actionUtil.parseModel(req);
		var records = {};
		var arr = new Array();

		// var DISTINCT_sql = 'SELECT DISTINCT($1) FROM ih_blood_registration_ids;';
		var AppVersion_sql = 'SELECT DISTINCT(AppVersion) FROM ih_blood_registration_ids;';
		var PhoneType_sql = 'SELECT DISTINCT(PhoneType) FROM ih_blood_registration_ids;';
		var PhoneOS_sql = 'SELECT DISTINCT(PhoneOS) FROM ih_blood_registration_ids;';
		var PhoneLang_sql = 'SELECT DISTINCT(PhoneLang) FROM ih_blood_registration_ids;';
		var PhoneRegion_sql = 'SELECT DISTINCT(PhoneRegion) FROM ih_blood_registration_ids;';

		var promise = new Promise(function (resolve, reject) {
			try {
		    	if(req.method=="GET"){
					resolve();
				}else {
					res.notFound();
				}
		  	} catch(e) {
			    reject(e);
		  	}
			
		});

		promise.then(function() {
			Model
				.query(AppVersion_sql, function(err, results) {
					arr = func.queryResults2array(results);
					objectAssign(records, {AppVersions: arr});
					
					Model.query(PhoneType_sql, function(err, results) {
						arr = func.queryResults2array(results);
						objectAssign(records, {PhoneTypes: arr});

						Model.query(PhoneLang_sql, function(err, results) {
							arr = func.queryResults2array(results);
							objectAssign(records, {PhoneLangs: arr});

							Model.query(PhoneOS_sql, function(err, results) {
								arr = func.queryResults2array(results);
								objectAssign(records, {PhoneOSs: arr});
								
								Model.query(PhoneRegion_sql, function(err, results) {
									arr = func.queryResults2array(results);
									objectAssign(records, {PhoneRegions_: arr});

									res.ok(records);
								});
							});
						});
					});
				});

			
		});

		

	},


	testFind(req, res) {
		const Model = actionUtil.parseModel(req);
		Model
			.find()
			.then(res.ok)
			.catch(res.negotiate);
  	},

  	testSpread(req, res) {
		const Model = actionUtil.parseModel(req);
		Model
			.find()
			.spread(res.ok)
			.catch(res.negotiate);
		
  	}

};
