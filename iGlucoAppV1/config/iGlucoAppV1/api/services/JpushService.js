"use strict";

// JSON.stringify()
// JSON.parse()
const const_val = require('../../const');
const JPush = require("jpush-sdk")
const appKey = "8809b026f422b3eafaa83a78";
const secret = "2b6fc513a8bd70b5ad1136af";
const client = JPush.buildClient(appKey, secret, 1, false);
const request = require('superagent');

const base_url_rec = const_val.base_url_rec;
const base_url_sche = const_val.base_url_sche;

module.exports = {
	
	test1(res) {
		res.ok("service测试成功")
	},
	test(res){
		JpushService.test1(res);
		// res.ok("service测试成功")
	},

	setReport(notification_info, msg_id, alert, push_time) {
		client.getReportReceiveds(msg_id, function (err, result_) {
			if (err) {
				console.log(JSON.stringify(err));
			} else {

				var jpushrec_info = {};
				/*for(var key in notification_info){
					notification_info[key] = JSON.stringify(notification_info[key])
				}*/
				Object.assign(jpushrec_info, notification_info, {msg_id: msg_id}, {alert: alert}, 
					{push_time, push_time}, {received: JSON.stringify(result_)} );
				
				request
				    .post(base_url_rec)
				  	.send(jpushrec_info)
				  	.end(function(err, result){
					  	// console.log("setReport result: " + JSON.stringify(result));
					  	/*if(result.status == 201){
					  		var id = JSON.parse(result.text).data.id;
					  		console.log(id);
					  		request
								.patch(base_url_sche)
								.send({status:1})
							  	.end(function(err, result){
							  		console.log(result);
							  	});
					  	}*/
			  		});
			}
		})
	},

	setSchedule(notification_info, alert_info, date_time_info, registration_id_arr) {
		// console.log("notification_info: " + JSON.stringify(notification_info));
		// console.log("alert_info: " + JSON.stringify(alert_info));
		// console.log("date_time_info: " + JSON.stringify(date_time_info));
		// console.log("registration_id_arr: " + JSON.stringify(registration_id_arr));
		
		var push_time = date_time_info.push_time;
		var PhoneType_arr = notification_info.PhoneType;
		var PhoneType_str = "";
		for(var key in PhoneType_arr){
			PhoneType_str += PhoneType_arr[key];
			PhoneType_str += " ";
		}
		var is_android = PhoneType_str.toLowerCase().includes("android");
		var is_ios = PhoneType_str.toLowerCase().includes("ios");
		var alert = alert_info.alert;

		if(is_android && is_ios){
			console.log("是全平台");
			res.badRequest("暂不支持全平台推送");
		}else if(is_android && !is_ios) {
			console.log("是android系统");
			/*var title = alert_info.title;
			client.push()
        		.setPlatform("android")
			    .setAudience(JPush.registration_id(registration_id_arr))
			    .setNotification(alert, JPush.android(alert, title, 5))
			    .setSingleSchedule(push_time + ':00')
			    .setSchedule(alert, true, function (err, result_) {
				    if(result_){
				    	console.log(JSON.stringify(result_));
				    }
			  	})*/
			
		}else if(!is_android && is_ios) {
			console.log("是iOS系统");
			/*client.push()
        		.setPlatform("ios")
			    .setAudience(JPush.registration_id(registration_id_arr))
			    .setNotification(alert)
			    .setSingleSchedule(push_time + ':00')
			    .setSchedule(alert, true, function (err, result_) {
				   if(result_){
				    	console.log(JSON.stringify(result_));
				    }
			  	})*/
		}
	},

	sendPush(notification_info, alert_info, date_time_info, registration_id_arr) {
		
		var push_time = date_time_info.push_time;
		var PhoneType_arr = notification_info.PhoneType;
		var PhoneType_str = "";
		for(var key in PhoneType_arr){
			PhoneType_str += PhoneType_arr[key];
			PhoneType_str += " ";
		}
		var is_android = PhoneType_str.toLowerCase().includes("android");
		var is_ios = PhoneType_str.toLowerCase().includes("ios");
		var alert = alert_info.alert;

		console.log("到这里了");
		JpushService.setReport(notification_info, 111, alert, push_time);
		return;
		console.log("JpushService 后边的代码执行了，return没有生效");

		if(is_android && is_ios){
			console.log("是全平台");
			res.badRequest("暂不支持全平台推送");
		}else if(is_android && !is_ios) {
			console.log("是android系统");
			var title = alert_info.title;

			// JPush.android(alert, title, builder_id, extras)

			client.push().setPlatform("android")
			    .setAudience(JPush.ALL)
			    .setNotification(JPush.android(alert, title, 1))
			    .send(function(err, result) {
			        if (err) {
			            console.log(err.message)
			        } else {
			            // console.log('Sendno: ' + result.sendno)
			            // console.log('Msg_id: ' + result.msg_id)
			            JpushService.setReport(notification_info, result.msg_id, alert, push_time);
			        }
			    });
		}else if(!is_android && is_ios) {
			console.log("是iOS系统");

			// JPush.ios (alert, sound, badge, contentAvailable, extras, category, mutableContent)
			client.push().setPlatform("ios")
			    .setAudience(JPush.ALL)
			    .setNotification(JPush.ios(alert, 'happy', 5))
			    .send(function(err, result) {
			        if (err) {
			            console.log(err.message)
			        } else {
			            // console.log('Sendno: ' + result.sendno)
			            // console.log('Msg_id: ' + result.msg_id)
			            JpushService.setReport(notification_info, result.msg_id, alert, push_time);
			        }
			    });

		}	

	}
}