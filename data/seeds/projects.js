
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Color App',
          description: 'App to pick out different colors.',
          completed: false
        },
        {
          name: 'Github User App',
          description: 'App for looking up speicific Github users and their followers.',
          completed: false
        },
        {
          name: 'Calculator App',
          description: 'An application to use as a basic calculator.',
          completed: false
        },
        {
          name: 'Portfolio',
          description: 'A showcase app displaying list of projects.',
          completed: false
        },
        {
          name: 'Music App',
          description: 'Play around with the a music API.',
          completed: false
        },
      ]);
    });
};
