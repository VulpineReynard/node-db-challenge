const express = require('express');
const helmet = require('helmet');
const projectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectsRouter);

server.get('/', (req, res) => {
  // get all species from the database
  res.status(200).send({ message: "Good to go." })
});

module.exports = server;