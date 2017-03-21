"use strict";

/**
 * Jpushrec
 * @description :: Model for storing Jpushrec records
 */
const moment = require('moment');

module.exports = {
  	schema: true,

  	dynamicFinders: false,

  	connection: 'sqlserver_us_pro',

	identity: 'country',

	tableName: 'ih_country',

	autoCreatedAt: false,
	autoUpdatedAt: false,

	attributes: {

		id: {
	      type: 'integer',
	      primaryKey: true,
	      unique: true,
	      autoIncrement: true
	    },

	    ChineseName: {
	      type: 'string',
	      defaultsTo: ''
	    },

	    CountryCode: {
	      type: 'string',
	      defaultsTo: ''
	    },

	    EnglishName: {
	      type: 'string',
	      defaultsTo: ''
	    },

	    CreateTime: {
	      type: 'datetime',
	      defaultsTo: moment().format("YYYY-MM-DD HH:mm")
	    },

	    Aid: {
	      type: 'integer'
	    },

	    WeightUnit: {
	      type: 'integer'
	    },

	    HumidityUnit: {
	      type: 'integer'
	    },

	    TimeZone2: {
	      type: 'float'
	    },

	    StateId: {
	      type: 'integer'
	    },

		toJSON() {
		  return this.toObject();
		}
	},

  	beforeUpdate: (values, next) => next(),
  	beforeCreate: (values, next) => next()
};
