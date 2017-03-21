"use strict";

/**
 * Jpushrec
 * @description :: Model for storing Jpushrec records
 */
const moment = require('moment');

module.exports = {
  	schema: true,

  	dynamicFinders: false,

  	connection: 'mysql_china_test',

	identity: 'jpushrec',

	tableName: 'ih_blood_jpush_records',

	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		id: {
	      type: 'integer',
	      primaryKey: true,
	      unique: true,
	      autoIncrement: true
	    },

	    msg_id: {
	      type: 'integer',
	      required: true,
	      defaultsTo: -1
	    },


	    received: {
	      type: 'string',
	      defaultsTo: ''
	    },

	    AppVersion: {
	      type: 'string',
	      notEmpty: true,
	      defaultsTo: ''
	    },

	    PhoneOS: {
	      type: 'string',
	      notEmpty: true,
	      required: true,
	      defaultsTo: ''
	    },

	    PhoneType: {
	      type: 'string',
	      notEmpty: true,
	      defaultsTo: ''
	    },

	    PhoneLang: {
	      type: 'string',
	      notEmpty: true,
	      defaultsTo: ''
	    },

	    PhoneRegion: {
	      type: 'string',
	      notEmpty: true,
	      defaultsTo: ''
	    },
	    
	    alert: {
	      type: 'string',
	      notEmpty: true,
	      defaultsTo: ''
	    },

	    push_time: {
	    	type: 'datetime',
	    	notEmpty: true,
	    	defaultsTo: moment().format("YYYY-MM-DD HH:mm")
	    },
	    
	    		
		toJSON() {
		  return this.toObject();
		}
	},

  	beforeUpdate: (values, next) => next(),
  	beforeCreate: (values, next) => next()
};
