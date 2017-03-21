var fs = require('fs')
var path = require('path')
var stream = require('stream')
var onFinished = require('on-finished')
var fs_extra = require('fs-extra');

exports.outputFileSync = function outputFileSync (filePath, content) {
  fs.appendFile(filePath,content,'utf8',function(err){  
      if(err)  
      {  
          console.log(err);  
      }  
  }); 
  
  // fs_extra.outputFileSync(filePath, content);
}

exports.ensureFileSync = function ensureFileSync (filePath) {
  fs_extra.ensureFileSync(filePath);
}

exports.file = function file (name) {
  return fs.createReadStream(path.join(__dirname, 'files', name))
}

exports.fileSize = function fileSize (path) {
  return fs.statSync(path).size
}

exports.submitForm = function submitForm (multer, form, cb) {
  form.getLength(function (err, length) {
    if (err) return cb(err)

    var req = new stream.PassThrough()

    req.complete = false
    form.once('end', function () {
      req.complete = true
    })

    form.pipe(req)
    req.headers = {
      'content-type': 'multipart/form-data; boundary=' + form.getBoundary(),
      'content-length': length
    }

    multer(req, null, function (err) {
      onFinished(req, function () { cb(err, req) })
    })
  })
}