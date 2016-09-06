'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('music_type').notNullable().defaultTo('');
    table.integer('number_of_albums').notNullable().defaultTo(1);
    table.string('alias_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('artists');
};
