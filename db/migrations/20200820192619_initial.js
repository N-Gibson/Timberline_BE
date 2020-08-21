exports.up = function (knex) {
  return knex.schema
    .createTable("contact", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("description");
      table.integer("phone");
      table.timestamps(true, true);
    })
    .createTable("reviews", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("review");
      table.integer("phone");
      table.boolean("verified");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("contact");
};
