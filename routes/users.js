var express = require('express');
var router = express.Router();
var db = require('../models/connection');

/* GET users listing. */
router.get('/', function(req, res, next) {  
  console.log('get Users');

});

router.post('/register', function(req, res, next) {
  let result = {
      status: 10,
      message: "Error",
      data: []
  }

  db.none('INSERT INTO t_mtr_users(first_name, phone, email, password) VALUES(${first_name}, ${phone}, ${email}, ${password})', req.body)
  .then((data) => {
      result.message = "Success";
      result.data = data;
      res.send(result);
  })
  .catch(error => {
      result.message = error.detail;
      res.send(result);
  });    
})

module.exports = router;
