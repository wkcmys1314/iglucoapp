"use strict";

/**
 * IUserController
 * @description :: Server-side logic for ...
 */

// const soap = require('soap');
// const utils = require('utility');

const const_val = require('../../const');
const Joi = require('joi');
const request = require('superagent');

const app_info_schema = require('../schema/app_info_schema')
const user_info_schema = require('../schema/user_info_schema')

const JPush = require('jpush-sdk');
const appKey = "8809b026f422b3eafaa83a78";
const secret = "2b6fc513a8bd70b5ad1136af";
const client = JPush.buildClient(appKey, secret);

const base_url_iuser = const_val.base_url_iuser;

// var args = {name: 'value'};
/*$aUserName = "pl08@1.com";
$aUserName = "13012258808";*/

// JSON.stringify()
// JSON.parse()
module.exports = {

	index(req, res) {

		
    if(req.method=="GET"){

      res.notFound("",{message:"您请求的资源没有找到"});
       


      /*soap.createClient(url, function(err, client) {
        client.GetBackPassWord({aUserName: '13012258808'}, function(err, result) {
          res.ok(JSON.parse(result.GetBackPassWordResult));
        });
      })*/

      
    }else if(req.method=="POST"){


      var params = req.body;


      // console.log(req.body.app_info);
      // console.log(req.body.user_info);

      var app_info = JSON.parse(params.app_info);
      var user_info = JSON.parse(params.user_info);

      var promise = new Promise(function (resolve, reject) {
        Joi.validate(app_info, app_info_schema(), function (err, value) { 
          if(err){
            reject(err);
            res.badRequest(err,{code:"E_VALIDATION", message:"app_info缺少参数或参数格式有问题"});
          }else {
            resolve();
          }

        });
        
      });

      /*promise.then(function() {
        
      }, function(err) {
        res.badRequest(err);
      });*/

      promise.then(function() {
        Joi.validate(user_info, user_info_schema(), function (err, value) { 
          if(err){
            res.badRequest(err,{code:"E_VALIDATION", message:"user_info缺少参数或参数格式有问题"});
          }
        });

      }, function(err) {
        res.badRequest(err);
      });

      promise.then(function() {

        Object.assign(
          app_info,
          {"SC" : "7c789858c0ec4ebf8189ebb14b6730a5"}, 
          {"SV" : "399027b443004d4b93b6570567318a8e"}
        );
        // console.log("app_info: " + JSON.stringify(app_info))

        var app_user_info = {};

        /*for(var key in app_info){
          console.log(key + " => " + app_info[key]);
        }*/
        Object.assign(app_user_info, user_info, app_info );

        // res.ok(app_user_info);
        

        /*var app_user_info = {
          Un:"username@123.com",
          Pw:"zxm#cklweqwe",
          SC:"7c789858c0ec4ebf8189ebb14b6730a5",
          SV:"399027b443004d4b93b6570567318a8e",
          AppVersion:"TestApi5.0",
          AppGuid:"183b5c7575ca42aabecfd5e6a7c3e91e",
          PhoneOS:"iphone7",
          PhoneName:"iphone",
          PhoneID:"1725dc306fcb5cca41b239d9fb6715bf66b583a2",
          PhoneLanguage:"English",
          PhoneRegion:"USA",
          QueueNum:"111111"
        }*/

        console.log("app_user_info: " + JSON.stringify(app_user_info));

        request
          .post(base_url_iuser + "/register.htm")
            .send(app_user_info)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            // .set('Content-Type', 'application/json')
            .end(function(err, result){
              if(result){
                var data = JSON.parse(result.text);
                
                if(data.ResultMessage=="100"){
                  var message = "注册成功"
                }else if(data.ResultMessage=="201"){
                  var message = "用户名重复"
                }else if(data.ResultMessage=="202"){
                  var message = "用户名格式不正确非邮箱或手机号"
                }else if(data.ResultMessage=="203"){
                  var message = "密码不符合要求"
                }else if(data.ResultMessage=="211"){
                  var message = "app传上来的数据不完整"
                }/*else if(data.ResultMessage=="213"){
                  var message = "appNum验证不通过"
                }else if(data.ResultMessage=="223"){
                  var message = "clientid验证不通过"
                }*/else {
                  var message = "未知错误"
                }
                // {status : result.status, code:"", message:""}
                // res.outside(data, {status : data.ResultMessage, message : message});
                res.ok(data, {code:data.ResultMessage, message:message});
              }
            });

      }, function(err) {
        res.badRequest(err);
      });

      // user.Pw = utils.md5(user.Pw);

    }else if(req.method=="PUT"){
      res.notFound("",{message:"您请求的资源没有找到"});
      // res.ok("PUT");
    }else if(req.method=="PATCH"){
      res.notFound("",{message:"您请求的资源没有找到"});
      // res.ok("PATCH");
    }else if(req.method=="DELETE"){
      res.notFound("",{message:"您请求的资源没有找到"});
      // res.ok("DELETE");
    }


	}

  

};
