/*"use strict";

module.exports = {
	
	// dynamicFinders: false,

	connection: 'redis',

	identity: 'rediskv',

	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {
		
		k: {
			type: 'string',
			notEmpty: true,
			required: true
		},

		v: {
			type: 'string',
			notEmpty: true,
			required: true
		},

		toJSON() {
	      return this.toObject();
	    }

	},

	beforeUpdate: (values, next) => next(),
  	beforeCreate: (values, next) => next()
}*/