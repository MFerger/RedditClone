var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.post('/signup', function(req, res, next) {
  const saltRounds = 4;
  const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);
  var data = {
    name: req.body.name,
    password: passwordHash,
  }
  console.log('it got to the signup route!!!');
  knex('users').insert(data).returning('*').then(function (users) {
    res.json(users[0]);
    console.log("success!!!!", users[0]);
  })
});
module.exports = router;
