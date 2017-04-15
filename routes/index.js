var express = require('express');
var router = express.Router();
var length = 0;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/test', function(req, res, next) {
  for (var index in req.body)
  {
    length++;
  }
  var time = new Date();
  var  H = time.getHours();
  var  M = time.getMinutes();
  var  S = time.getSeconds();
  var time2Str  = H + ":" + M + ":" + S;
  console.log(time2Str,"ReviceAlarm:",length);
  res.send(length.toString);
});
module.exports = router;