import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("user_classes", (table) => {
    table.integer("id").notNullable().references("id").inTable("users");
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("user_classes");
}
