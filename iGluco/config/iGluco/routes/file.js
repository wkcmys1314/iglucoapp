var express = require('express');
var router = express.Router();
var pathUtil = require('../util/pathUtil');
var archiver = require('archiver');
// require('../util/timeUtil');
var p = require('path');
var fs = require('fs-extra');
var jsonUtil = require('../util/jsonUtil');

// Array.prototype.indexOf = function(val) { for (var i = 0; i < this.length; i++) { if (this[i] == val) return i; } return -1; };
// Array.prototype.remove = function(val) { var index = this.indexOf(val); if (index > -1) { this.splice(index, 1); } };

router.use(express.static(pathUtil.videoPath));
router.route('/videos/*.mp4').all(function(req, res, next){
	/*res.download('/root/WorkSpace/nodeJs/iGluco/public/uploads/videos/' + req.url.split("/")[2],
		req.url.split("/")[2]);*/
	res.download(pathUtil.videoPath + req.url.split("/")[2],
		req.url.split("/")[2]);
});
router.route('/*.mp4').all(function(req, res, next){
	res.download(pathUtil.videoPath + '*.mp4','*.mp4');
});

router.route('/logs/*.txt').all(function(req, res, next){
    // var file = '/tmp/this/path/does/not/exist/file.txt'
    var fileName = req.url.split("/")[2];
    var file = pathUtil.logPath + fileName;
    fs.ensureFile(file, function (err) {
        console.log(err);
      if(typeof err === 'undefined'){
        res.download(file, fileName);
      }
    });
	
});

router.route('/videos').all(function(req, res, next){
	var param;
    if(req.method == "GET"){
        param = req.query;
    }else {
        param = req.body;
    }
    var CountryCode = param.CountryCode;
    var DeviceType = param.DeviceType;
    if(CountryCode != "FR")
    	CountryCode = "US";
    var DeviceTypeArr = ["BG1", "BG5"];
    if(DeviceTypeArr.indexOf(DeviceType) != -1){

        res.json({
            TS:new Date().getTime(), 
            ResultMessage: "100",
            ReturnValue: {url:"http://c.ihealthlabs.com/mhealth/" 
                + "LW_" + DeviceType + "_" + CountryCode + ".mp4"}
        });

    	// res.redirect("http://c.ihealthlabs.com/mhealth/" 
    	// + "LW_" + DeviceType + "_" + CountryCode + ".mp4");
    }else {
    	// jsonUtil.notEnough(res);
    	res.json({
    		TS:new Date().getTime(), 
    		ResultMessage: "404",
    		ReturnValue: "视频地址不存在"
    	});
    }
    // res.redirect("http://c.ihealthlabs.com/mhealth/BG1_FR.mp4");
    
});


router.route('/logs/zip').all(function(req, res, next){
	var param;
    if(req.method == "GET"){
        param = req.query;
    }else {
        param = req.body;
    }
	// console.log(param);
	// console.log(param.ss.toString());
	var fileNames = Array();
	fileNames = param.fileNames.toString().split(',');
	// fileNames[0] = '55.txt';
	// fileNames[1] = 'abc.txt';
	console.log(fileNames);
	var archive = archiver('zip');

    // archive.on('error', function(err) {
    	
    // });

    res.attachment('log-' + new Date().getTime() + '.zip');

    archive.pipe(res);

    // var files = [__dirname + '/fixtures/file1.txt', __dirname + '/fixtures/file2.txt'];
    // console.log(fileNames);
    for(var i in fileNames) {
        var file = pathUtil.logPath + fileNames[i];
        console.log(file);
        fs.ensureFileSync(file);
	    archive.file(file, { name: p.basename(file) });
  	}

  	archive.finalize();
});

module.exports = router;