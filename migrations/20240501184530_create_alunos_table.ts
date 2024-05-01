import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('aluno', (table) => {
        table.bigIncrements('id').primary();
        table.string('nome');
        table.bigInteger('cpf'); 
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('aluno');
}
