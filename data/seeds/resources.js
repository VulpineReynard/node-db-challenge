
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          name: 'Vue',
        },
        {
          name: 'React'
        },
        {
          name: 'Node'
        },
        {
          name: 'Angular'
        },
        {
          name: 'Vanilla'
        },
        {
          name: 'Elixir'
        },
      ]);
    });
};
