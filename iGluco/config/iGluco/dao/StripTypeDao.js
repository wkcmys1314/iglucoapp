var mysql = require('mysql');
var $conf = require('../conf/db');

/*sqlserver*/
var mssql = require('mssql');
var config = require('../conf/config1');

var $util = require('../util/util');
var $sql = require('./StripTypeSqlMapping');
var jsonUtil = require('../util/jsonUtil');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {

    queryByCountryCode: function (req, res, next) {
        var param;
        if(req.method == "GET"){
            param = req.query;
        }else {
            param = req.body;
        }
        var CountryCode = param.CountryCode;

        mssql.connect(config).then(function() {
            new mssql.Request()
            .input('CountryCode', mssql.NVarChar, CountryCode)
            .query($sql.queryByCountryCode)
            .then(function(result) {
                res.set({'ETag': '12345'})
                jsonUtil.jsonQuery(res, result);
            }).catch(function(err) {
                console.log(err);
            });

        }).catch(function(err) {
            console.log(err);
        });
    },

    
	queryAll: function (req, res, next) {

        var param;
        if(req.method == "GET"){
            param = req.query;
        }else {
            param = req.body;
        }

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
            // console.log("AccessToken: " + AccessToken);
            if(typeof AccessToken !== 'undefined' && AccessToken != "" 
                && AccessToken != " " &&  AccessToken != null){
                
                mssql.connect(config).then(function() {
                    new mssql.Request()
                    .query($sql.queryAll)
                    .then(function(result) {
                        jsonUtil.jsonQuery(res, result);
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
          // console.log(err);
        });



    },

    updateAll: function (req, res) {
        var param = req.query;

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
            // console.log("AccessToken: " + AccessToken);
            if(typeof AccessToken !== 'undefined' && AccessToken != "" 
                && AccessToken != " " &&  AccessToken != null){
                
                mssql.connect(config).then(function() {
                    new mssql.Request()
                    .query($sql.updateAll)
                    .then(function(result) {
                        res.send("修改成功");
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
          // console.log(err);
        });

    },

    updateByCountryCode: function (req, res) {
        var param = req.query;
        console.log("param: " + JSON.stringify(param));

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
            // console.log("AccessToken: " + AccessToken);
            if(typeof AccessToken !== 'undefined' && AccessToken != "" 
                && AccessToken != " " &&  AccessToken != null){
                
                mssql.connect(config).then(function() {
                    new mssql.Request()
                    .input('StripType', mssql.Int, param.StripType)
                    .input('CountryCode', mssql.NVarChar, param.CountryCode)
                    .query($sql.updateByCountryCode)
                    .then(function(result) {
                        res.send("修改成功");
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
          // console.log(err);
        });

    }

};
