
const Joi = require('joi');

module.exports = function(){

	const schema = Joi.object().keys({
		PhoneLang : Joi.string().required(),
		alert : Joi.string().required(),
		title : Joi.string()
	});

	return schema;
}