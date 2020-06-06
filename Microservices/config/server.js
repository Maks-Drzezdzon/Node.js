const express = require("express");
const server = express();
// will look for default for if not found  go to 3000
const PORT = process.env.PORT || 3000;

server.listen = server.listen.bind(server, PORT, () =>
  console.log(`Listening on port ${PORT}`)
);

module.exports.server;
