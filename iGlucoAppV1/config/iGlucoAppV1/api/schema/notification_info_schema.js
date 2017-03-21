
const Joi = require('joi');

module.exports = function(){

	const schema = Joi.object().keys({
		Application : Joi.string().required(),
		AppVersion : Joi.array().required(),
		PhoneType : Joi.array().required(),
		PhoneOS : Joi.array().required(),
		PhoneLang : Joi.array().required(),
		PhoneRegion : Joi.array().required()
		// schedule_id : Joi.string()
		// TimeZone : Joi.string()
	});

	return schema;
}