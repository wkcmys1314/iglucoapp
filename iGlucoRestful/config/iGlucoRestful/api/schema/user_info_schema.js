const Joi = require('joi');

module.exports = function(){
	/*
		var Un = "lw33885922@126.com"
		var Pw = "e10adc3949ba59abbe56e057f20f883e"
	*/
	const schema = Joi.object().keys({
		Un : Joi.required(),
		Pw : Joi.required()
	});

	return schema;
}