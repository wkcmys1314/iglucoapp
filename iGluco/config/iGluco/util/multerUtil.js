var multer = require('multer');
var AppLogDao = require('../dao/AppLogDao');
var fileUtil = require('../util/fileUtil');
var pathUtil = require('./pathUtil');

var storage = multer.diskStorage({
 //设置上传后文件路径，uploads文件夹会自动创建。
	destination: function (req, file, cb) {
	    // cb(null, './public/uploads/logs')
	    cb(null, pathUtil.logPath);
	}, 
 //给上传文件重命名，获取添加后缀名
	filename: function (req, file, cb) {
		var fileFormat = (file.originalname).split(".");
    	var realName = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
    	// 重命名以后的文件名
    	// cb(null, realName);
      	cb(null, file.originalname);
	}
});  

/*function fileFilter (req, file, cb){
	// 文件不能为空
	cb(null, false);
}*/
//添加配置文件到muler对象。
var upload = multer({
  // fileFilter: fileFilter,
  storage: storage
});

// module.exports = upload;
exports.upload = upload;
