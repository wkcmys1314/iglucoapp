"use strict";

/**
 * JpushrecController
 * @description :: Server-side logic for ...
 */
// JSON.stringify()
// JSON.parse()
const actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
const _ = require('lodash');
// const func = sails.config.func;

module.exports = {

	override(req, res) {
		const Model = actionUtil.parseModel(req);
		// console.log("rest到这里了：");
		const values = actionUtil.parseValues(req);

		if(req.method=="GET"){
			
			res.notFound("",{message:"您请求的资源没有找到"});
		}else if(req.method=="POST"){
			console.log("values" + JSON.stringify(values))
			
			res.notFound("",{message:"您请求的资源没有找到"});
		}else if(req.method=="PUT"){
			
			Model
			    .update({ schedule_id : Model.schedule_id}, Model)
			    .then(records => records ? res.ok(records) : res.notFound())
			    .catch(res.negotiate);

		}else if(req.method=="PATCH"){
	      	res.notFound("",{message:"您请求的资源没有找到"});
	    }else if(req.method=="DELETE"){
	    	var params = req.body;

	    	console.log("rest到这里了：" + JSON.stringify(params));

	    	Model.destroy(params)
				.exec(function(err) {
					if(err){
						res.notFound(err);
					}else {
						res.ok();
					}
				});

	      	// res.notFound("",{message:"您请求的资源没有找到"});
	    }
	}
};
