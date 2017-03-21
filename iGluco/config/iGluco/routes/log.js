var express = require('express');
var router = express.Router();
var AppLogDao = require('../dao/AppLogDao');
var muilter = require('../util/multerUtil');
// var session = require('express-session');

/*router.get('/log', function(req, res, next) {
	// res.end();
	res.render('log/index', {
		title: 'log标题',
		body: 'log内容'
	});
});*/

router.route('/log/uploadAppLog')
.all(function(req, res, next) {
	// var upload = muilter.upload.single('File'); 
	// upload(req, res, function (err) {
	// 	var param = req.body;
	// 	if(param) {
	// 		console.log(param);
	// 	}
	//     if (err) {
 //        	console.log(err);
	//     }
	// });
    AppLogDao.insert(req, res, next);	
	// res.send("文件上传成功");
});

module.exports = router;
