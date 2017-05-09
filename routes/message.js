var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',
  {
    title: "message route TITLE",
    message: "this is meessage"
  });
});

module.exports = router;
