var express = require('express');
var router = express.Router();

var fileUtil = require('../util/fileUtil');
var $util = require('../util/util');

router.get('/test/gdh', function(req, res, next) {
	var params = {
		title: 'gdh白盒',
		body: '这是gdhBody'
	};
	// res.send("这是白盒测试");
	res.render('test/gdh', params);
});

router.get('/test/log', function(req, res, next) {
	// res.send("这是白盒测试");
	res.render('test/log');
});

// router.get('/test/outputFileSync', function(req, res, next) {
// 	var StripCode = new Array(
//     		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F72003608A9',
//     		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F72003807F7',
//     		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F7200371F67',
//     		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F7200391039', 
//     		// 测试
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0AA30F10',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0AA408BF',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A850348',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A861B59',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A870C97',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A930D14',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A921ADA',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A901505',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A9102CB',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A811CF6',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8204E7',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A831329',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8A1BD8',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8B0C16',
//     		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8C0BB9'
// 		);
// 		var sqlUpdate = "update ih_bg_bottle set StripLeft = 25 ";
// 		sqlUpdate += " where StripCode = @StripCode;";
// 		var filePath = "/root/WorkSpace/nodeJs/iGluco/logs/updateAllStripLeft.txt";
// 		fileUtil.ensureFileSync(filePath);
// 		for (var i = 0; i < StripCode.length; i++) {
// 			fileUtil.outputFileSync(filePath, sqlUpdate + " " + StripCode[i] + " " + $util.timeFilter('') + "\n");
// 		}
// 	// res.render('test/log');
// 	res.end();
// });


/*router.use(express.static('/root/WorkSpace/nodeJs/iGluco/public/uploads'));
router.route('/*.mp4').all(function(req, res, next){
	res.download('/root/WorkSpace/nodeJs/iGluco/public/uploads/*.mp4','*.mp4');
});
router.route('/public/uploads/*.txt').all(function(req, res, next){
	res.download('/root/WorkSpace/nodeJs/iGluco' + req.url, req.url.split("/")[3]);
});*/

module.exports = router;