/*// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    var Result = '';
    var ResultMessage = '';
    if(typeof ret === 'undefined') {
        Result = 500;
        ResultMessage = '网络错误';
    }else if (ret == '') {
        Result = 400;
        ResultMessage = '没有数据'
    }else {
        Result = 200;
        ResultMessage = '查询成功';
    }

    var json = {
        Result:Result,
        TS:new Date().getTime(),
        ResultMessage:ResultMessage,
        // QueueNum:'123',
        ReturnValue:ret
    };
    res.json(json);
};*/

/*module.exports = function (res, ret) {
    var Result = '';
    var ResultMessage = '';
    console.log(ret);
    if(typeof ret === 'undefined') {
        Result = 500;
        ResultMessage = '网络错误';
    }else if (ret == '') {
        Result = 400;
        ResultMessage = '没有数据'
    }else {
        Result = 200;
        ResultMessage = '查询成功';
    }

    var json = {
        Result:Result,
        TS:new Date().getTime(),
        ResultMessage:ResultMessage,
        // QueueNum:'123',
        ReturnValue:ret
    };
    res.json(json);
};*/
function handleErr(err) {
    return JSON.parse(JSON.stringify(err));
}

module.exports = {

    jsonQuery: function (res, ret) {
        // var Result = '';
        var ResultMessage = '';
        if(typeof ret === 'undefined') {
            // Result = 500;
            ResultMessage = '500';
        }else if (ret == '') {
            // Result = 210;
            ResultMessage = '210'
        }else {
            // Result = 100;
            ResultMessage = '100';
        }

        var json = {
            // Result:Result,
            TS:new Date().getTime(),
            ResultMessage:ResultMessage,
            // QueueNum:'123',
            ReturnValue:ret
        };
        res.json(json);
    },

    jsonInsert: function (res, ret, err) {
        var errno = "";
        if(typeof err !== 'undefined' && err != null) {
            err = handleErr(err);
            var errno = err.errno;
            console.log("err: " + JSON.stringify(err));
        }

        
        // var Result = '';
        var ResultMessage = '100';
        // console.log(ret);
        if(!ret) {
            // Result = 500;

            if(errno==1062 || errno=="1062"){
                ResultMessage = '211';
            }else if (errno==1366 || errno=="1366") {
                ResultMessage = '234';
            }else {
                ResultMessage = '500';
            }
            
        }else {
            // Result = 100;
            ResultMessage = '100';
        }

        var json = {
            // Result:Result,
            TS:new Date().getTime(),
            ResultMessage:ResultMessage,
            // QueueNum:'123',
            // ReturnValue:ret
        };
        res.json(json);
    },


    notEnough: function (res) {
        var json = {
            // Result:Result,
            TS:new Date().getTime(),
            ResultMessage:'211',
            // QueueNum:'123',
            // ReturnValue:ret
        };
        res.status(211).json(json);
    },

    badToken: function (res) {
        var json = {
            // Result:Result,
            TS:new Date().getTime(),
            ResultMessage:'221',
            // QueueNum:'123',
            ReturnValue:"bad token"
        };
        res.status(221).json(json);
    },

    resToken: function (res, token) {
        // console.log(token);

        if(typeof token === 'undefined' || token=="" || token==" " ) {
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'223',
                // QueueNum:'123',
                ReturnValue:[{'msg':"AppVersion is not right"}]
            };
            res.status(223).json(json);
        }else {
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'100',
                // ReturnValue:[{'AccessToken':token}]
                ReturnValue:token
            };
            res.status(200).json(json);
        }
    },

    jsonDelete: function (res, ret) {
        // console.log("ret: " + JSON.stringify(ret));
        // console.log("affectedRows: " + ret.affectedRows);
        if(ret.affectedRows == 0 || ret.affectedRows == "0"){
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'222',
                // QueueNum:'123',
                ReturnValue:[{'msg':"Index is not existed!"}]
            };
            res.status(222).json(json);
        }else {
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'100',
                // QueueNum:'123',
                ReturnValue:[{'msg':"delete success!"}]
            };
            res.status(200).json(json);
        }
    },

    jsonUpdate: function (res, ret) {
        // console.log("ret: " + JSON.stringify(ret));
        // console.log("affectedRows: " + ret.affectedRows);
        if(ret.affectedRows == 0 || ret.affectedRows == "0"){
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'222',
                // QueueNum:'123',
                ReturnValue:[{'msg':"Index is not existed!"}]
            };
            res.status(222).json(json);
        }else {
            var json = {
                // Result:Result,
                TS:new Date().getTime(),
                ResultMessage:'100',
                // QueueNum:'123',
                ReturnValue:[{'msg':"update success!"}]
            };
            res.status(200).json(json);
        }
    }

};