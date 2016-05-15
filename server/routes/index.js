var express = require('express');
var router = express.Router();
var knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

router.get('/posts', function(req, res, next) {
  var results = {};
  knex('posts')
    .then(function(posts){
    results.posts = posts;
  }).then(function () {
    knex('comments')
       .then(function(comments) {
           results.comments = comments;
           for (var i = 0; i < results.posts.length; i++) {
             results.posts[i].comments = [];
             for (var j = 0; j < results.comments.length; j++) {
               if (results.posts[i].id === results.comments[j].post_id) results.posts[i].comments.push(results.comments[j])
             }
           }
           delete results.comments;
           res.json(results);
       })
  })
});

router.post('/votes', (req, res, next) =>{
  const post_id = req.body.id;
  const upOrDown = req.body.upOrDown;
  const changeVoteVal = (
    upOrDown === 'up' ? 'votes + 1' : 'votes - 1'
  );
  knex('posts')
  .where( {post_id} ).first()
  .update('votes', knex.raw(changeVoteVal))
  .returning('*')
  .then( votes => {
    res.json(votes[0])
  })
  .catch( err => {
    res.send( {err} )
  });
});

//
//
// router.post('/votes', (req, res, next) => {
//   console.log('wooooo it got to the votes in the router');
//   console.log(req.body);
//   var post_id = req.body.id;
//   var changeVoteVal = (
//     req.body.upOrDown === 1
//       ? 'votes + 1'
//       : 'votes - 1'
//   )
//   console.log(changeVoteVal);
//   knex('posts')
//     .where({id: post_id}).first()
//     .update('votes', knex.raw(changeVoteVal))
//     .then(votes =>{})
//     .catch(err =>{
//       res.send({err})
//     });
// });

module.exports = router;
