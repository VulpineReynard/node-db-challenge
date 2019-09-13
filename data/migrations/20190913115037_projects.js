exports.up = function(knex) {
  return knex.schema

  .createTable('projects', table => {
    table.increments();
    table.string('name', 255).notNullable();
    table.string('description').unique();
    table.boolean('completed').defaultTo(false)
  })

  .createTable('tasks', table => {
    table.increments();
    table.string('description').unique().notNullable();
    table.string('notes');
    table.boolean('completed').defaultTo(false)
    table
    .integer('project_id')
    .unsigned()
    .references('id')
    .inTable('projects')
  })

  .createTable('resources', table => {
    table.increments();
    table.string('name').notNullable();
  })

  .createTable('projects-resources', table => {
    table.increments();

    table
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects');

    table
    .integer('resource_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('resources');

    table.string('description');
    table.unique(['project_id', 'resource_id']);
  })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects-resources')
  .dropTableIfExists('resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
