var express = require('express');
var router = express.Router();
// var superagent = require('superagent');
var request = require('request');
/* GET home page. */

router.get('/neura', function(req, res, next) {
  res.render('neura/index', {
    title: 'neura标题',
    body: 'neura内容'
  });
});

router.route('/neura/subscribe')
.all(function(req, res, next) {

  var param = req.body;
  var access_token = param.access_token;
  var event_name = param.event_name;
  var identifier = param.identifier;
  console.log(param);
  var neura_url = 'https://wapi.theneura.com/v1/subscriptions';
  // var access_token = 'd6072f6d0b52e3d1b66e1597d1b2891e5240a8a82ee32264d9b9f8837fe46313';
  /*var access_token = '00f7e687db22aa21c965a1754dcf1f24746129a054dac5f06dfa4e356eb303e3';
  var event_name = 'userFinishedRunning';
  var identifier = 'h';*/

  var headers = {
    'Authorization': ' Bearer ' + access_token 
  }
    /*superagent.post(neura_url)
    .set('Authorization', ' Bearer ' + access_token)
    .send("event_name=" + event_name + "&identifier=" + identifier)
    .end(function (err, sres) {
      res.send(sres.text);
    });*/

  request.post(
    {
        url:neura_url,
        form:{
            event_name:event_name,
            identifier:identifier
        },
        headers: headers,
        encoding:'utf8'
    },
    function(err, response, body){
      res.send(body);
      // res.send("asdasd");
    }
  );

});


router.route('/neura/webHook')
.all(function(req, res, next) {
    var param = req.body;
    var param1 = req.query;
  /*var identifier = param.identifier;
  var userId = param.userId;
  // var event = param.event;
  var event_name = param.event.name;
  var timestamp = param.event.timestamp;
  var metadata = param.event.metadata;*/

  console.log(param);
  console.log(param1);
  console.log(req.protocol);

  if(req.protocol === 'https') {
      // res.status(200).send('Welcome to Safety Land!');
      res.status(200).send(param);
  }
  
});

module.exports = router;
