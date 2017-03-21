
const Joi = require('joi');

module.exports = function(){

	/*
		var SC = "7c789858c0ec4ebf8189ebb14b6730a5",
		var SV= "399027b443004d4b93b6570567318a8e",
		var AppVersion = "TestApi5.0";
		var AppGuid = "183b5c7575ca42aabecfd5e6a7c3e91e";
		var PhoneOS = "iphone7";
		var PhoneName = "iphone";
		var PhoneID = "1725dc306fcb5cca41b239d9fb6715bf66b583a2";
		var PhoneLanguage= "English";
		var PhoneRegion= "USA";
		var QueueNum=111111
	*/

	const schema = Joi.object().keys({
		// SC : Joi.string().required(),
		// SV : Joi.string().required(),
		AppVersion : Joi.string().required(),
		AppGuid : Joi.string().required(),
		PhoneOS : Joi.string().required(),
		PhoneName : Joi.string().required(),
		PhoneID : Joi.string().required(),
		PhoneLanguage : Joi.string().required(),
		PhoneRegion : Joi.string().required(),
		QueueNum : Joi.number().integer().required()
		// UUId : Joi.string().required(),
		// AppNum: Joi.string().required()
		// client_id : Joi.string().required(),
		// client_secret : Joi.string().required()

	});

	return schema;
}