const db = require('../data/db-config.js');

module.exports = {
  find,
  findById, 
  add, 
  update, 
  remove,
  getTasks,
  addTask,
  getResourcesById,
  addResource
}

function find() {
  return db('projects')
}

function findById(id) {
  // first() returns the first entry in the db matching the query
  return db('projects')
    .where({ id })
    .first()
}

function add(newProject) {
  return db('projects')
    .insert(newProject)
    .then(([id]) => {
      return findById(id);
    });
}

function update(updatedProject, id) {
  return db('projects')
  .where({ id })
  .update(updatedProject);
}

function remove(id) {
  return db('projects')
  .where('id', id)
  .del();
}

function getTasks(id) {
  return db('tasks') 
    .where('project_id', id)
}


function addTask(projectId, newTask) {
  return db('tasks')
  .insert(newTask)
  .then(([id]) => {
    return findTaskById(id)
    .where({ id })
    .first()
  });
}

function findTaskById(id) {
  return db('tasks')
    .where({ id })
    .first()
}

function getResourcesById(id) {
  return db('projects-resources as pr')
    .select(['pr.description', 'r.name', 'pr.resource_id', 'pr.id as projects-resources'])
    .join('resources as r', 'pr.resource_id', 'r.id')
    .where({ project_id: id })
}

function addResource(projectId, newResource) {
  return db('resources')
    .insert(newResource)
    .then(([id]) => {
      return db('projects-resources')
        .insert({ project_id: projectId, resource_id: id })
    })
}