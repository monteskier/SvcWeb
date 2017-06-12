var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var Post = require('../../entity/posts');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('public/index', { title: 'Express' });
});

module.exports = router;
