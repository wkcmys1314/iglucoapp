var mysql = require('mysql');
var $conf = require('../conf/db');

/*sqlserver*/
var mssql = require('mssql');
var config = require('../conf/config1');

var $util = require('../util/util');
var $sql = require('./GdhInfoSqlMapping');
var jsonUtil = require('../util/jsonUtil');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {

	insertGdhInfo: function (req, res, next) {

        var param;
        if(req.method == "GET"){
            param = req.query;
        }else {
            param = req.body;
        }

        var size = $util.jsonLength(param);
        if(size != 12){
            jsonUtil.notEnough(res);
        }else {
            CreateTime = $util.timeFilter('');
            param.MeasurementTime = $util.timeFilter(param.MeasurementTime);
            param.UserID = $util.intFilter(param.UserID);
            param.TimeZone = $util.intFilter(param.TimeZone);
            param.stripNumber = $util.intFilter(param.stripNumber);
            param.AccessToken   =   param.AccessToken.replace(/\s+/g,"");

            var promise = new Promise(function (resolve, reject) {
                pool.getConnection(function(err, connection) {
                    connection.query($sql.queryByAccessToken,
                        [param.AccessToken],
                        function(err, result) {
                            result = JSON.parse(JSON.stringify(result));
                            if (err) {
                                reject(err);
                            }
                            else if(typeof result !== 'undefined' && result != "" 
                                && result != " " &&  result != null){
                               resolve(result[0].AccessToken); 
                            }else {
                               jsonUtil.badToken(res);
                            }
                    });
                    connection.release();
                });
            });

            promise.then(function(AccessToken) {

                if(typeof AccessToken !== 'undefined' && AccessToken != "" 
                    && AccessToken != " " &&  AccessToken != null){
                    
                    /*connection.query($sql.insertGdhInfo, 
                        [param.UserID, param.UserName, param.mDeviceId, param.mDeviceType, param.DeviceId, 
                            param.DeviceType, param.AppVersion, param.CountryCode,  
                            param.MeasurementTime, CreateTime, param.TimeZone, param.stripNumber],
                        function(err, result) {
                            jsonUtil.jsonInsert(res, result, err);
                    });*/

                    mssql.connect(config).then(function() {
                        new mssql.Request()
                        .input('UserID', mssql.Int, param.UserID)
                        .input('UserName', mssql.NVarChar, param.UserName)
                        .input('mDeviceId', mssql.NVarChar, param.mDeviceId)
                        .input('mDeviceType', mssql.NVarChar, param.mDeviceType)
                        .input('DeviceId', mssql.NVarChar, param.DeviceId)
                        .input('DeviceType', mssql.NVarChar, param.DeviceType)
                        .input('AppVersion', mssql.NVarChar, param.AppVersion)
                        .input('CountryCode', mssql.NVarChar, param.CountryCode)
                        .input('MeasurementTime', param.MeasurementTime)
                        .input('CreateTime', CreateTime)
                        .input('TimeZone', mssql.Int, param.TimeZone)
                        .input('stripNumber', mssql.Int, param.stripNumber)
                        .query($sql.insertGdhInfo)
                        .then(function(result) {
                            jsonUtil.jsonInsert(res, 'success');
                            // jsonUtil.jsonQuery(res, result);
                        }).catch(function(err) {
                            console.log(err);
                        });

                    }).catch(function(err) {
                        console.log(err);
                    });

                }else {
                    jsonUtil.badToken(res);
                }

            }, function(err) {

            });

        }
        
    },

        /*pool.getConnection(function(err, connection) {
            var param;
            if(req.method == "GET"){
                param = req.query;
            }else {
                param = req.body;
            }

            var size = $util.jsonLength(param);
            if(size != 12){
                jsonUtil.notEnough(res);
            }else {
                // CreateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
                CreateTime = $util.timeFilter('');
                param.MeasurementTime = $util.timeFilter(param.MeasurementTime);
                param.UserID = $util.intFilter(param.UserID);
                param.TimeZone = $util.intFilter(param.TimeZone);
                param.stripNumber = $util.intFilter(param.stripNumber);
                param.AccessToken   =   param.AccessToken.replace(/\s+/g,"");
                
                var promise = new Promise(function (resolve, reject) {
                    connection.query($sql.queryByAccessToken,
                        [param.AccessToken],
                        function(err, result) {
                            result = JSON.parse(JSON.stringify(result));
                            if (err) {
                                reject(err);
                            }
                            else if(typeof result !== 'undefined' && result != "" 
                                && result != " " &&  result != null){
                               resolve(result[0].AccessToken); 
                            }else {
                               jsonUtil.badToken(res);
                            }
                    });
                });

                promise.then(function(AccessToken) {

                    if(typeof AccessToken !== 'undefined' && AccessToken != "" 
                        && AccessToken != " " &&  AccessToken != null){
                        
                        connection.query($sql.insertGdhInfo, 
                            [param.UserID, param.UserName, param.mDeviceId, param.mDeviceType, param.DeviceId, 
                                param.DeviceType, param.AppVersion, param.CountryCode,  
                                param.MeasurementTime, CreateTime, param.TimeZone, param.stripNumber],
                            function(err, result) {
                                jsonUtil.jsonInsert(res, result, err);
                        });

                    }else {
                        jsonUtil.badToken(res);
                    }

                }, function(err) {
                  // console.log(err);
                });

                connection.release();

            }

        });*/

    

    queryGdhInfoAll: function (req, res, next) {

        mssql.connect(config).then(function() {
            new mssql.Request()
            .query($sql.queryGdhInfoAll)
            .then(function(result) {
                jsonUtil.jsonQuery(res, result);
            }).catch(function(err) {
                console.log(err);
            });
        }).catch(function(err) {
            console.log(err);
        });

        /*pool.getConnection(function(err, connection) {
            connection.query($sql.queryGdhInfoAll, function(err, result) {
                jsonUtil.jsonQuery(res, result);
                
            });

            connection.release();
        });*/
    }

};
