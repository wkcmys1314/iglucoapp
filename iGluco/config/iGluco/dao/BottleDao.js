// sqlserver新加的 
var mssql = require('mssql');
var config = require('../conf/config');
var jsonUtil = require('../util/jsonUtil');
var fileUtil = require('../util/fileUtil');
var $util = require('../util/util');

module.exports = {

	queryAll: function(req, res, next) {
		var sqlSelect = "select top 10 * from ih_bg_bottle;";
        // conf = "mssql://liuwen_reader:UcQ7QIwyE@54.215.10.198/AndonCloud";
        mssql.connect(config).then(function() {
            new mssql.Request()
            .query(sqlSelect)
            .then(function(recordset) {
                console.log(recordset);
            }).catch(function(err) {
        		console.log(err);
            });

        }).catch(function(err) {
            console.log(err);
        });
    },	

    updateByStripCode: function(req, res, next) {
		var sqlUpdate = "update ih_bg_bottle set StripLeft = 25 ";
		sqlUpdate += " where StripCode = '" + '024C565F4C5614322D1200A02F3485B6F314378BACD619011F72003608A' +"';";
        mssql.connect(config).then(function() {
            new mssql.Request()
            .query(sqlUpdate)
            .then(function(recordset) {
                console.log(recordset);
            }).catch(function(err) {
        		console.log(err);
            });

        }).catch(function(err) {
            console.log(err);
        });
        res.end();
    },

    updateAll: function(req, res, next) {
    	var StripCode = new Array(
    		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F72003608A9',
    		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F72003807F7',
    		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F7200371F67',
    		// '024C565F4C5614322D1200A02F3485B6F314378BACD619011F7200391039', 
    		// 测试
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0AA30F10',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0AA408BF',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A850348',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A861B59',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A870C97',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A930D14',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A921ADA',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A901505',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A9102CB',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A811CF6',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8204E7',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A831329',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8A1BD8',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8B0C16',
    		'02364664364614322D1200A021294F73DF1439677BFF190122FB0A8C0BB9'
		);
		var sqlUpdate = "update ih_bg_bottle set StripLeft = 25 ";
		sqlUpdate += " where StripCode = @StripCode;";
        var filePath = "/root/WorkSpace/nodeJs/iGluco/logs/updateAllStripLeft.txt";
        fileUtil.ensureFileSync(filePath);

        mssql.connect(config).then(function() {

        	for (var i = 0; i < StripCode.length; i++) {
        		new mssql.Request()
	            .input('StripCode', mssql.NVarChar, StripCode[i])
	            .query(sqlUpdate)
	            .then(function(result) {
	                // console.log(result);
	            }).catch(function(err) {
	        		// console.log(err);
	            });
                fileUtil.outputFileSync(filePath, sqlUpdate + " " + StripCode[i] + " " + $util.timeFilter('') + "\n");
        	}
            
        }).catch(function(err) {
            console.log(err);
        });
        res.end();
    }
	
};

