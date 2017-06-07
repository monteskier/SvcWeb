var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var Post = require('../../entity/posts');
var User = require('../../entity/user');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var mongoose = req.mongoose;
  var admin = new User({
    username:"admin",
    password:"BladeRunner2019",
  });

  admin.save(function(err){
      if(err) throw err;

      admin.findOne({username:"admin"}, function(err, user){
        if(err) throw err;
        if(user){
          user.comparePassword('BladeRunner2019', function(err, isMatch){
            if(err) throw err;
            console.log('password:'+isMatch);
          });
        }
      });
  });


  res.send('respond with a resource');
});

module.exports = router;
