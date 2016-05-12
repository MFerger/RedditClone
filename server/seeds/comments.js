
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('comments').del(),
    // Inserts seed entries
    knex('comments').insert({
      id: 1,
      post_id: 1,
      user_id: 1,
      content: 'here is a cool comment from user 1 to post 1'
    }),
    knex('comments').insert({
      id: 2,
      post_id: 2,
      user_id: 2,
      content: 'here is a cool comment from user 2 to post 2'
    }),
    knex('comments').insert({
      id: 3,
      post_id: 3,
      user_id: 3,
      content: 'here is a cool comment from user 3 to post 3'
    }),
    knex('comments').insert({
      id: 4,
      post_id: 4,
      user_id: 4,
      content: 'here is a cool comment from user 4 to post 4'
    }),
    knex('comments').insert({
      id: 5,
      post_id: 5,
      user_id: 5, 
      content: 'here is a cool comment from user 5 to post 5'
    })
  );
};
