"use strict";

// JSON.stringify()
// JSON.parse()

const JPush = require("jpush-sdk")
const appKey = "8809b026f422b3eafaa83a78";
const secret = "2b6fc513a8bd70b5ad1136af";
const client = JPush.buildClient(appKey, secret, 1, false);
const request = require('superagent');


const func = {
	
	delSchedule(params, res){
		
		console.log("Appv1到这里了：" + JSON.stringify(params));

		var base_url = "http://localhost:3005/jpushrecs/";
		var base_url_override = "http://localhost:3005/jpushrecs/override/";
		var schedule_id = params.schedule_id;
		// var id = params.id;

		client.delSchedule(schedule_id, function (err, result_) {
		  if (err) {
		    if (err instanceof JPush.APIConnectionError) {
		      console.log(err.message)
		    } else if (err instanceof JPush.APIRequestError) {
		      console.log(err.message)
		    }
		  }else {
		  	request
				.delete(base_url_override)
				.send(params)
			  	.end(function(err, result){
			  		res.status(result.status).jsonx(JSON.parse(result.text))
	  			});
		  }
		})

	},
	
	
	updateSchedule(notification_info, alert_info, res) {

		var PhoneType_arr = notification_info.PhoneType;
		var PhoneType_str = "";

		for(var key in PhoneType_arr){
			PhoneType_str += PhoneType_arr[key];
			PhoneType_str += " ";
		}

		var is_android = PhoneType_str.toLowerCase().includes("android");
		var is_ios = PhoneType_str.toLowerCase().includes("ios");

		var alert = alert_info.alert;
		var date_time = alert_info.date_time;

		if(is_android && is_ios){
			console.log("是全平台");
			client.push()
			    .setNotification(alert)
			    .setSingleSchedule(date_time + ':00')
			    .updateSchedule(notification_info.schedule_id , null, null,
			    	function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.update_report(notification_info, result_.schedule_id, res);
				    	// res.ok(result_);
				    }
			  	})

		}else if(is_android && !is_ios) {
			console.log("是android系统");
			var title = alert_info.title;
			client.push()
			    .setNotification(alert, JPush.android(alert, title, 5))
			    .setSingleSchedule(date_time + ':00')
			    .updateSchedule(notification_info.schedule_id , null, null,
			    	function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.update_report(notification_info, result_.schedule_id, res);
				    }
			  	})
		}else if(!is_android && is_ios) {
			console.log("是iOS系统");
			client.push()
			    .setNotification(alert)
			    .setSingleSchedule(date_time + ':00')
			    .updateSchedule(notification_info.schedule_id , null, null,
			    	function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.update_report(notification_info, result_.schedule_id, res);
				    }
			  	})
		}

	},

	setSchedule(notification_info, alert_info, registration_ids, res) {
		
		// console.log("PhoneType_arr: " + JSON.stringify(PhoneType_arr));
		var PhoneType_arr = notification_info.PhoneType;

		var PhoneType_str = "";
		for(var key in PhoneType_arr){
			PhoneType_str += PhoneType_arr[key];
			PhoneType_str += " ";
		}
		// console.log("PhoneType_str: " + PhoneType_str);
		var is_android = PhoneType_str.toLowerCase().includes("android");
		var is_ios = PhoneType_str.toLowerCase().includes("ios");

		var alert = alert_info.alert;
		var date_time = alert_info.date_time;

		if(is_android && is_ios){
			console.log("是全平台");
			client.push()
        		.setPlatform(JPush.ALL)
			    .setAudience(JPush.registration_id(registration_ids))
			    .setNotification(alert)
			    .setSingleSchedule(date_time + ':00')
			    .setSchedule(alert, true, function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.set_report(notification_info, result_.schedule_id, res);
				    	// res.ok(result_);
				    }
			  	})

		}else if(is_android && !is_ios) {
			console.log("是android系统");
			var title = alert_info.title;
			client.push()
        		.setPlatform("android")
			    .setAudience(JPush.registration_id(registration_ids))
			    .setNotification(alert, JPush.android(alert, title, 5))
			    .setSingleSchedule(date_time + ':00')
			    .setSchedule(alert, true, function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.set_report(notification_info, result_.schedule_id, res);
				    }
			  	})
		}else if(!is_android && is_ios) {
			console.log("是iOS系统");
			client.push()
        		.setPlatform("ios")
			    .setAudience(JPush.registration_id(registration_ids))
			    .setNotification(alert)
			    .setSingleSchedule(date_time + ':00')
			    .setSchedule(alert, true, function (err, result_) {
				    if (err) {
				      if (err instanceof JPush.APIConnectionError) {
				        console.log(err.message)
				      } else if (err instanceof JPush.APIRequestError) {
				        console.log(err.message)
				      }
				    }else {
				    	func.set_report(notification_info, result_.schedule_id, res);
				    }
			  	})
		}

	},

	arr2Str(arr){
		var str = "";
		for(var key in arr){
			str += arr[key];
			str += " ";
		}
		return str;
	},

	arr_splice_empty(arr) {
		for(var key in arr){
        	if(arr[key] == "")
    			arr.splice(key, 1);
        }
        return arr;
	},

	arr_splice_null(arr) {
		for(var key in arr){
        	if(arr[key] == null)
    			arr.splice(key, 1);
        }
        return arr;
	},

	string2Array(stringObj) {  
	    stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");  
	    if (stringObj.indexOf("[") == 0) {// if has chinese  
	        stringObj = stringObj.substring(1, stringObj.length - 1);  
	    }  
	    var arr = stringObj.split(",");  
	    var newArray = [];//new Array();  
	    for ( var i = 0; i < arr.length; i++) {  
	        var arrOne = arr[i];  
	        newArray.push(arrOne);  
	    }  
	    // console.log(newArray);  
	    return newArray;  
	},

	arr_unique(array) { 
		var n = []; //一个新的临时数组 
		//遍历当前数组 
		for(var i = 0; i < array.length; i++){ 
			//如果当前数组的第i已经保存进了临时数组，那么跳过， 
			//否则把当前项push到临时数组里面 
			if (n.indexOf(array[i]) == -1) n.push(array[i]); 
		} 
		return n; 
	}
	
}
	

module.exports = {
	func : func
	// func1 : func1
}