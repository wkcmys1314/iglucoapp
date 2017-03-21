/**
 * Created by fujunou on 2015/3/6.
 */
require('./timeUtil');
var fs = require('fs-extra');
var pathUtil = require('./pathUtil');

function lwTrim (str){
	if(typeof str === 'undefined'){
		str = '';
	}
	return str.replace(/^\s+|\s+$/g,"");
}

function isAndroidToken (token) {
    var file = pathUtil.tokenPath + "androidToken.txt";
    var data = fs.readJsonSync(file);
    if(token != data.androidToken) {
        return false;
    }else {
        return true;
    }
    // console.log(obj);
}

function isIosToken (token) {
    var file = pathUtil.tokenPath + "iosToken.txt";
    var data = fs.readJsonSync(file);
    if(token != data.iosToken) {
        return false;
    }else {
        return true;
    }
}

module.exports = {
    extend: function(target, source, flag) {
        for(var key in source) {
            if(source.hasOwnProperty(key))
                flag ?
                    (target[key] = source[key]) :
                    (target[key] === void 0 && (target[key] = source[key]));
        }
        return target;
    },
    timeFilter: function(time) {
    	time = lwTrim(time);
    	if (time.length == 0){
    		time = new Date().Format("yyyy-MM-dd hh:mm:ss");	
    	}
        return time;
    },
    intFilter: function(int) {
    	int = lwTrim(int);
    	if(int.length == 0){
    		int = 0;
    	}
    	return int;
    },
    
    jsonLength: function(obj) {
        var size = 0, key;
        for (key in obj) {
            size++;
        }
        // console.log(size);
        return size;
    },
    
    isToken: function(token) {
        // console.log("isAndroidToken:" + isAndroidToken(token));
        if(isAndroidToken(token) || isIosToken(token)){
            return true;
        }else {
            return false;
        }
    },

    getOSIP: function(){
        var os = require('os');
        var interfaces = os.networkInterfaces();
        var IPv4 = '127.0.0.1';
        for (var key in interfaces) {
          var alias = 0;
          interfaces[key].forEach(function(details){
            if (details.family == 'IPv4' && key == 'en0'  ) {
                IPv4 = details.address;
            }
          });
        }
        return IPv4;
    },

}