
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          description: 'Pick out colors.',
          notes: 'Which scheme to pick.',
          completed: false,
          project_id: 1
        },
        {
          description: 'Choose data displaying library.',
          notes: 'Which library to pick.',
          completed: false,
          project_id: 1
        },
        {
          description: 'Choose API or build one?',
          notes: '',
          completed: false,
          project_id: 2
        },
        {
          description: 'How big will the calculator be?',
          notes: 'Which scheme to pick.',
          completed: false,
          project_id: 3
        },
      ]);
    });
};
