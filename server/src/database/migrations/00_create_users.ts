import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("surname").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("whatsapp");
    table.string("bio");
    table.string("passwordResetToken");
    table.string("passwordResetExpires");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
