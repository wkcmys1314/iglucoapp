"use strict";

/**
 * Jpushreg
 * @description :: Model for storing Jpushreg records
 */

module.exports = {
  
  // schema: false,
  dynamicFinders: false,

  connection: 'mysql_china_test',

  identity: 'jpushreg',

  tableName: 'ih_blood_registration_ids',
  // tableName: 'jpushreg',

  autoCreatedAt: false,
  autoUpdatedAt: false,

  /*autoPK: false,
  dynamicFinders: false,*/

  attributes: {
    // Fill your attributes here

    id: {
      type: 'integer',
      primaryKey: true,
      unique: true,
      // columnName: 'id',
      autoIncrement: true
    },

    registration_id: {
      type: 'string',
      notEmpty: true,
      required: true
      // columnName: 'registration_id',
    },

    UserId: {
      type: 'integer',
      defaultsTo: -1
      // defaultsTo: ''
      // required: true
      // unique: true
      // columnName: 'UserId'
    },

    AppVersion: {
      type: 'string',
      notEmpty: true,
      required: true
      // defaultsTo: ''
      // columnName: 'AppVersion'
    },

    PhoneType: {
      type: 'string',
      notEmpty: true,
      required: true
      // defaultsTo: ''
      // columnName: 'PhoneType'
    },

    PhoneOS: {
      type: 'string',
      notEmpty: true,
      required: true
      // defaultsTo: ''
      // columnName: 'PhoneOS'
    },

    PhoneLang: {
      type: 'string',
      notEmpty: true,
      required: true
      // defaultsTo: ''
      // columnName: 'PhoneLang'
    },

    PhoneRegion: {
      type: 'string',
      notEmpty: true,
      required: true
      // defaultsTo: ''
      // columnName: 'PhoneRegion'
    },

    TimeZone: {
      type: 'float',
      notNull: true,
      required: true,
      defaultsTo: -1
      // defaultsTo: null
      // columnName: 'PhoneRegion'
    },

    

    /*

    extras: {
      type: 'string',
      defaultsTo: ''
    },

    createdAt: {
      type: 'datetime'
    },

    updatedAt: {
      type: 'datetime'
    },

    */

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
  
};
