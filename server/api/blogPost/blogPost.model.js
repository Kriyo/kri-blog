'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogPostSchema = new Schema({
  title: String,
  content: String,
  //time : { type : Date, default: Date.now }
  active: Boolean
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);


// ObjectId("54511a7eec459580689a0c9d").getTimestamp()
// console.log(new mongoose.Types.ObjectId().getTimestamp() );
