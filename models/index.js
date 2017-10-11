var connect = function(){
  // getting-started.js
  var mongoose = require('mongoose');
  var path = require('path');
  var Schema = mongoose.Schema;
  var basename  = path.basename(__filename);
  var env       = process.env.NODE_ENV || 'development';
  var config    = require(path.join(__dirname, '..', 'config', '../config/config.json'))[env];

  mongoose.connect('mongodb://learningapp:L1X3fTRo1Ag2i6lPaaLu44XIp1deZW6P8Mv9PJN7BZgCPQmLwzipBI02K8ArwTPzkpBYTKiyD5fCjihSGUCuug==@learningapp.documents.azure.com:10255/learningappmongodbcollection?ssl=true');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Successful connection');
  });

}

module.exports = connect;