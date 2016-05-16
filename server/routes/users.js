var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.post('/signup', function(req, res, next) {
  var data = req.body;

  knex('users').insert(data).returning('*').then(function (users) {
    res.json(users[0]);
  })
});

module.exports = router;
