"use strict";

module.exports = {

	func: {
		queryResults2array(results){

			var keys = new Array();
			var arr = new Array();

			if(results){
				keys = Object.keys(results[0]);
			}
			
			for(var key in results){
	        	var value = Object.getOwnPropertyDescriptor(results[key], keys[0]).value;
	        	// arr[key] = value;
	        	arr.push(value);
	        }

	        /*for(var key in arr){
	        	if(arr[key] == "")
        			arr.splice(key, 1);
	        }*/
	        return arr;
		}
	}
	

}