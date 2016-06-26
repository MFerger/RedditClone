exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments();
    // table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade');
    table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').onUpdate('CASCADE').index();
    // table.integer('post_id').unsigned().references('id').inTable('posts').onDelete('cascade').onUpdate('cascade')
    table.integer('post_id').unsigned().references('posts.id').onDelete('CASCADE').onUpdate('CASCADE').index();
    table.string('content').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
