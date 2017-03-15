// server.js
// where your node app starts

// init project
var express = require('express');
var mongodb = require('mongodb');
var app = express();
var dbconn;
//connect to DB
function connectToDB() {
  var uri = 'mongodb://user:user@ds025792.mlab.com:25792/madmaxlaxsandbox';
  mongodb.MongoClient.connect(uri, function(err, db) {
    console.log("Connecting to db");
    if(err) throw err;
    console.log("Connected!");
    
    dbconn = db;
    //var users = db.createCollection('users');
    
  });
}
connectToDB();