var mysql = require('mysql');
var $conf = require('../conf/dbLog');
var $util = require('../util/util');
var $sql = require('./AppLogMapping');
// var session = require('express-session');
var fileUtil = require('../util/fileUtil');
require('../util/timeUtil');
var jsonUtil = require('../util/jsonUtil');
var pathUtil = require('../util/pathUtil');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {

    insert: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // var param = req.query || req.params || req.body;
            var param = req.body;
            var FileName = param.FileName;
            var LevelId = param.LevelId;
            var DownloadUrl = param.DownloadUrl;
            // var FilePath = pathUtil.logPath + FileName;
            // var FilePath1 = pathUtil.logDownloadUrl + FileName;
            // var FileSize = fileUtil.fileSize(FilePath);
            var CreateTime = new Date().Format("yyyy-MM-dd hh:mm:ss");
            var UpdateTime = CreateTime;

            connection.query($sql.insert, 
                [FileName, DownloadUrl, CreateTime, 
                    UpdateTime, LevelId, 1],
                function(err, result) {
                    jsonUtil.jsonInsert(res, result);
                    connection.release();
            });
        });
    }
}