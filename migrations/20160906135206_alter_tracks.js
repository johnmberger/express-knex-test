
exports.up = function(knex, Promise) {
  return knex.schema.table('tracks', (table) => {
    table.dropColumn('artist');
    table.integer('artist_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tracks', (table) => {
    table.dropColumn('artist_id');
    table.string('artist').notNullable().defaultTo('');
  });
};
