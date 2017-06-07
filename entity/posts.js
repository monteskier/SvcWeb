var mongoose = require("mongoose");
var moment = require('moment');
var Post = mongoose.Schema();

var postSchema =  new Post({
  title:String,
  description: String,
  username: { type: String, required: true, unique: true },
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
model.export = Post;
