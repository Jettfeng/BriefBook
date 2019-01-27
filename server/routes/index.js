var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list',function(req,res){
  res.json({list:['123','456','789']})
})
module.exports = router;
