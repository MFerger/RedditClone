var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../../client/knexfile')[process.env.NODE_ENV || 'development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/v1/posts', function(req, res, next) {
  knex('posts').then(function(posts){
    res.json(posts)
  })
})
module.exports = router;
