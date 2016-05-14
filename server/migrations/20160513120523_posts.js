exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function (table) {
      table.increments();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade').onUpdate('cascade')
      table.string('description').notNullable();
      table.string('title').notNullable();
      table.string('img_url').notNullable();
      table.string('author').notNullable();
      table.integer('votes').notNullable();
      table.boolean('showComment').notNullable();
      table.boolean('newCommentVisible').notNullable();
      table.dateTime('date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
