// JSON.stringify()
// JSON.parse()
const const_val = require('./const');

const request = require('superagent');
const cron = require('cron');

const base_url_reg = const_val.base_url_reg
const base_url_sche = const_val.base_url_sche;
const JpushService = require('./api/services/JpushService')

// .get(base_url_sche + "?id=27&id=28")
request
	.get(base_url_sche + "?status=0")
  	.end(function(err, result){
  		// console.log(result.text)

  		var schedule_arr = JSON.parse(result.text);
  		var id, notification_info, alert_info, date_time_info;
  		var schedule, push_time, type, data, job;
  		var key, key_, value, value_, registration_id_arr;

  		for(key in schedule_arr){
  			schedule = schedule_arr[key];
  			// console.log(key + ": " + JSON.stringify(schedule));
  			id = schedule.id;
  			notification_info = schedule.notification_info;
  			alert_info = schedule.alert_info;
  			date_time_info = schedule.date_time_info;
  			delete notification_info["Application"];

  			push_time = date_time_info.push_time;
  			type = date_time_info.type;
  			if(type == "utc"){
				push_time = moment(push_time, "YYYY-MM-DD HH:mm").utc().format("YYYY-MM-DD HH:mm")
  			}

  			request
				.get(base_url_reg + "?where=" + JSON.stringify(notification_info))
			  	.end(function(err, result){
			  		// console.log(result.text)
			  		data = JSON.parse(result.text).data;

			  		job = new cron.CronJob({
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
							  		console.log(result);
							  	});

					  	},
					  	start: true
				    })
				    job.start();

			  	});
  		}
  		
  	});
