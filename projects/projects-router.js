const express = require('express');

const projectsHelper = require('./projects-model.js');

const router = express.Router();

router.route("/")
.get((req, res) => {
  projectsHelper.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).send({ message: "Something went wrong." })
    })
})
.post((req, res) => {
  const projectData = req.body;

  projectsHelper.add(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project.' });
  });
})

router.route("/:id/tasks")
.get((req, res) => {
  const { id } = req.params;
  projectsHelper.getTasks(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).send({ message: "Something went wrong." })
    })
})
.post((req, res) => {
  const { id } = req.params;
  const newTask = req.body;
  newTask.project_id = id;
  projectsHelper.addTask(id, newTask)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Something went wrong." })
    })
})

router.route("/:id/resources")
.get((req, res) => {
  const { id } = req.params;
  projectsHelper.getResourcesById(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).send({ message: "Something went wrong." })
    })
})

module.exports = router;