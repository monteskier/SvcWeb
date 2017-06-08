var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{ type : String, required : true, index: { unique : true } },
  password:{ type : String, required : true}

});

userSchema.pre('save', function(next){
  var user = this;
  //solo hasheamos la contraseá en el caso que se nodifique o el usuario sea nuevo
  if(!user.isModified('password')) return next();
  //generamos la sal
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) return next(err);
    // hasehamos la password con la nueva SALT_WORK_FACTOR
    bcrypt.hash(user.password, salt, function(err, hash){
      if (err) return next(err);
      //override the cleartext password with the hashed oneAtATime
      user.password = hash;
    });
  });

});

userSchema.methods.comparePassword = function(candidatePassword, cb){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return cb(err);
    cb(null, isMatch);
  });
};


module.exports = mongoose.model('User',userSchema);
