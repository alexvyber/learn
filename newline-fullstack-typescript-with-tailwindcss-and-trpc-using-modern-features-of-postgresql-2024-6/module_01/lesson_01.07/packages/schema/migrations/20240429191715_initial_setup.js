exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
};

exports.down = function (knex) {
  return knex.raw(`
    DROP TABLE users;
  `);
};
