const Joi = require('joi');

module.exports = function(){

	const schema = Joi.object().keys({

		type : Joi.string().required(),
		push_time : Joi.string().required(),
		add_time : Joi.string().required(),
		edit_time : Joi.string().required()
	});

	return schema;
}