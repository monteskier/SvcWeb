var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;
var moment = require('moment');
var Schema = mongoose.Schema;

var postSchema =  new Schema({
  title:String,
  description: String,
  username: {type: String, required: true, unique: true },
  text:String,
  img:String,
  docs:String,
  active:Boolean,
  date_pub:Date,
  date_end:Date,
});

postSchema.methods.activate = function(){
  return (this.date_pub <= req.moment(Date.now()).format('MM/DD/YYYY') && this.date_end > req.moment(Date.now()).format('MM/DD/YYYY') ? true : false);
};

var Post = mongoose.model('Post', postSchema);
module.export = Post;
