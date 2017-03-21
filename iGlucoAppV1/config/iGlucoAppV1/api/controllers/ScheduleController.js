"use strict";

// JSON.stringify()
// JSON.parse()
const const_val = require('../../const');
const Joi = require('joi');
const request = require('superagent');
const objectAssign = require('object-assign');
const moment = require('moment');
// const schedule = require('node-schedule');
const cron = require('cron');
const base_url_sche = const_val.base_url_sche;
const base_url_reg = const_val.base_url_reg;
const base_url_sche_ = const_val.base_url_sche_;

const notification_info_schema = require('../schema/notification_info_schema')
const alert_info_schema = require('../schema/alert_info_schema')
const date_time_info_schema = require('../schema/date_time_info_schema')

const JpushService = require('../services/JpushService')
const func = sails.config.func;

module.exports = {

	setSchedule_(req, res) {
		var params = req.body;
		var id = params.id;

		new Promise(function (resolve, reject) {
			if(req.method=="PATCH"){
				resolve();
			}else {
				res.notFound();
			}
		}).then(function() {
			request
				.get(base_url_sche + id)
			  	.end(function(err, result){
			  		var schedule = JSON.parse(result.text);
			  		var notification_info = schedule.notification_info
					var date_time_info = schedule.date_time_info
					var alert_info = schedule.alert_info
					// var user_id = schedule.user_id;
			  		delete notification_info["Application"];

			  		var key, value, key_, value_, registration_id_arr;
  					var schedule, push_time, type, data;
			  		push_time = date_time_info.push_time;
		  			type = date_time_info.type;


		  			request
						.get(base_url_reg + "?where=" + JSON.stringify(notification_info))
					  	.end(function(err, result){
					  		data = JSON.parse(result.text).data;

					  		if(type == "utc"){
								push_time = moment(push_time, "YYYY-MM-DD HH:mm").utc().format("YYYY-MM-DD HH:mm")
				  			}/*else {
					  			var n = []; 
					  			for(key in data){
					  				value = data[key];
					  				if(n.indexOf(value.TimeZone) == -1)
					  				n.push(value.TimeZone)
					  			}
					  			console.log(n);
				  			}*/

				  			new cron.CronJob({
						    	cronTime: new Date(push_time),
						  		onTick: function() {
							    	console.log("cron begain");
							    	for(key_ in alert_info){
							  			registration_id_arr = new Array();
							  			value_ = alert_info[key_];
							  			for(key in data){
							  				value = data[key];
							  				if(value.PhoneLang == value_.PhoneLang){
												registration_id_arr.push(value.registration_id)
											}
							  			}
							  			setTimeout(function(){
							  				JpushService.sendPush(notification_info, alert_info[key_], 
							  					date_time_info, registration_id_arr)

							  			}, 1500)
							  		}

					  				
							  		request
										.patch(base_url_sche + id)
										.send({status:1})
									  	.end(function(err, result){
									  		
									  	});
							  	},
							  	start: true
						    }).start();

					  	});

			  	})

		}).catch(function(error) {
			res.badRequest(error,{code:"E_VALIDATION", message:"缺少参数或参数格式有问题"});
		});
	},


	setSchedule(req, res) {

		var params = req.body;
		// console.log(params);
		// return;

		var notification_info = JSON.parse(params.notification_info);
		var date_time_info = JSON.parse(params.date_time_info);
		var alert_info = JSON.parse(params.alert_info);
		var user_id = params.user_id;
		var key, value, key_, value_;
		var registration_id_arr;

		new Promise(function (resolve, reject) {
			if(req.method=="POST"){
				resolve();
			}else {
				res.notFound();
			}
		}).then(function() {
			Joi.validate(notification_info, notification_info_schema(), function (err, value) { 
	          	if(err){
	            	throw err;
	          	}
	        });
		}).then(function() {
			Joi.validate(alert_info[0], alert_info_schema(), function (err, value) { 
	          	if(err){
        			throw err;
	          	}
	        });
		}).then(function() {
			Joi.validate(date_time_info, date_time_info_schema(), function (err, value) { 
	          	if(err){
            		throw err;
	          	}
	        });
		}).then(function() {
			var schedule_info = {};
			var status = 0;
			objectAssign(schedule_info, {notification_info:notification_info}, {alert_info:alert_info}, 
				{date_time_info:date_time_info}, {user_id:user_id}, {status: status});
				
			request
				.post(base_url_sche)
				.send(schedule_info)
			  	.end(function(err, result){
			  		if(result){
			  			var id = JSON.parse(result.text).id;
				  		request
							.patch(base_url_sche_)
							.send({id:id})
						  	.end(function(err, result_){
						  	});
					  	res.created(JSON.parse(result.text));
			  		}
			  		
			  	});
		}).catch(function(error) {
			res.badRequest(error,{code:"E_VALIDATION", message:"缺少参数或参数格式有问题"});
		});


	},

	moment(req, res){
		JpushService.test(res);		
	},

	updateSchedule(req, res){

		var params = req.body;
		var notification_info = JSON.parse(params.notification_info);
		var date_time_info = JSON.parse(params.date_time_info);
		var alert_info = JSON.parse(params.alert_info);
		var user_id = params.user_id;
		var id = params.id;
		
		new Promise(function (resolve, reject) {
		  	if(req.method=="PUT"){
				resolve();
			}else {
				res.notFound();
			}
		}).then(function() {
			Joi.validate(notification_info, notification_info_schema(), function (err, value) { 
	          if(err){
	          	throw err;
	          }
	        });
		}).then(function() {
			Joi.validate(alert_info[0], alert_info_schema(), function (err, value) { 
	          if(err){
	          	throw err;
	          }
	        });
		}).then(function() {
			Joi.validate(date_time_info, date_time_info_schema(), function (err, value) { 
	          if(err){
	          	throw err;
	          }
	        });
		}).then(function() {

			notification_info.alert_info = alert_info;

			var schedule_info = {};
			
			var status = 0;
			objectAssign(schedule_info, {notification_info:notification_info}, {alert_info:alert_info}, 
				{date_time_info:date_time_info}, {user_id:user_id}, {status: status});
			

			request
				.put(base_url_sche + id)
				.send(schedule_info)
			  	.end(function(err, result){
			  		request
						.patch(base_url_sche_)
						.send({id:id})
					  	.end(function(err, result_){
					  	});
			  		res.ok(JSON.parse(result.text));
			  	});

		}).catch(function(error) {
			res.badRequest(error,{code:"E_VALIDATION", message:"缺少参数或参数格式有问题"});
		});

		

	},

	getScheduleList(req, res){

		new Promise(function (resolve, reject) {
			if(req.method=="GET"){
				resolve();
			}else {
				res.notFound();
			}
		}).then(function() {
			request
				.get(base_url_sche)
			  	.end(function(err, result){
			  		res.ok(JSON.parse(result.text));
			  	});
		}).catch(function(error) {
			res.notFound(error);
		})
		
	},

	delSchedule(req, res){

		var params = req.body;
		
		new Promise(function (resolve, reject) {
			if(req.method=="DELETE"){
				resolve();
			}else {
				res.notFound();
			}
		}).then(function() {
			request
				.delete(base_url_sche + params.id)
			  	.end(function(err, result){
			  		if(result){
		  				res.ok(JSON.parse(result.text));	
			  		}else {
			  			throw err;
			  		}
			  		
			  	});
		}).catch(function(error) {
			res.notFound(error);
		});
		
	}


}