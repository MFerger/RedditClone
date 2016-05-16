var bcrypt = require('bcrypt');
var passwordHash = bcrypt.hashSync('password', 4);

exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    // Inserts seed entries
    knex('users').insert([
      {
        name: 'User1',
        email: 'user1@gmail.com',
        password: passwordHash
      },
      {
        name: 'User2',
        email: 'user2@gmail.com',
        password: passwordHash
      },
      {
        name: 'User3',
        email: 'user3@gmail.com',
        password: passwordHash
      },
      {
        name: 'User4',
        email: 'user4@gmail.com',
        password: passwordHash
      },{
        name: 'User5',
        email: 'user5@gmail.com',
        password: passwordHash
      }
    ])

  );
};
