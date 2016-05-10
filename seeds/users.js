
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert({id: 1, user_name: 'User1'}),
    knex('users').insert({id: 2, user_name: 'User2'}),
    knex('users').insert({id: 3, user_name: 'User3'}),
    knex('users').insert({id: 4, user_name: 'User4'}),
    knex('users').insert({id: 5, user_name: 'User5'})
  );
};
