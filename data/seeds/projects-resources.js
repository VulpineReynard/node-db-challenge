
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects-resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects-resources').insert([
        {
          project_id: 1,
          resource_id: 1,
          description: 'Use the Vue'
        },
        {
          project_id: 1,
          resource_id: 2
        },
        {
          project_id: 2,
          resource_id: 1
        },
        {
          project_id: 2,
          resource_id: 4,
          description: 'yup'
        },
        {
          project_id: 3,
          resource_id: 3
        },
        {
          project_id: 3,
          resource_id: 1
        },
        {
          project_id: 3,
          resource_id: 5
        },
        {
          project_id: 3,
          resource_id: 6
        },
        {
          project_id: 4,
          resource_id: 2
        },
        {
          project_id: 1,
          resource_id: 4
        },
        {
          project_id: 1,
          resource_id: 5
        },
      ]);
    });
};
