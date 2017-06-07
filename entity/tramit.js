var mongoose = require("mongoose");
var Tramit = mongoose.Schema();

var tramitSchema = new tramit({
  title:String,
  discription:String,
  body:String,
  activate:Boolean,
  files:String,
  link:String,
});
var Tramit = mongoose.model("Tramit", tramitSchema);
model.export(Tramit);
