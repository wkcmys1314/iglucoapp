"use strict";

// JSON.stringify()
// JSON.parse()

const const_val = require('../../const');
const Joi = require('joi');
const request = require('superagent');
const objectAssign = require('object-assign');

const base_url_rec = const_val.base_url_rec;
const base_url_reg = const_val.base_url_reg;

const notification_info_schema = require('../schema/notification_info_schema')
const alert_info_schema = require('../schema/alert_info_schema')

const JpushService = require('../services/JpushService')

module.exports = {
	
	getJpushrecList(req, res) {
		res.notFound();
	},

	setJpushrec(req, res) {
		var params = req.body;
		var notification_info = JSON.parse(params.notification_info);
		var alert_info = JSON.parse(params.alert_info);
		var push_time = params.push_time;
		var key, value, key_, value_;
		var registration_id_arr;


		var jpushrec_info = {};
		objectAssign(jpushrec_info, {notification_info:notification_info}, 
			{alert_info:alert_info}, {push_time:push_time});

		request
			.get(base_url_reg + "?where=" + JSON.stringify(notification_info))
		  	.end(function(err, result){
		  		var data = JSON.parse(result.text).data;
		  		
		  		// alert_info.PhoneLang不能重复

		  		for(key_ in alert_info){
		  			registration_id_arr = new Array();
		  			value_ = alert_info[key_];
		  			for(key in data){
		  				value = data[key];
		  				if(value.PhoneLang == value_.PhoneLang){
							registration_id_arr.push(value.registration_id)
						}
		  			}
		  			JpushService.sendPush(notification_info, value_, registration_id_arr, res);
		  		}
		  		res.send();
		  	});
		
	},

	updateJpushrec(req, res) {
		res.notFound();
	},

	delJpushrec(req, res) {
		res.notFound();
	}
}