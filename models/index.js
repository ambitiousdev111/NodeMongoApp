var connect = function(){
  // getting-started.js
  var mongoose = require('mongoose');
  mongoose.connect('mongodb://learningapp:L1X3fTRo1Ag2i6lPaaLu44XIp1deZW6P8Mv9PJN7BZgCPQmLwzipBI02K8ArwTPzkpBYTKiyD5fCjihSGUCuug==@learningapp.documents.azure.com:10255/?ssl=true');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Successful connection');
  });


  var userSchema = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: {type: String, trim: true, required: true},
    cellPhoneNumber : {type: Number, unique: true},
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: String
  });

  var jobSchema = new Schema({
    category: {type: Number, required: true},
    title: {type: String, required: true},
    tags: [String],
    longDesc: String,
    startedDate: Date,
    views: Number,
    report: Boolean,
    reportCounter: Number,
    status: String,
    poster: String,
    lastModifiedInDate: Date,
    verified: Boolean
  });


  var User = mongoose.model('User', userSchema);
  var Job = mongoose.model('Job', jobSchema);

}

module.exports = connect;