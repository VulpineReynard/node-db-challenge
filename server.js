const express = require('express');
const helmet = require('helmet');


const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  // get all species from the database
  res.status(200).send({ message: "Good to go." })
});

module.exports = server;