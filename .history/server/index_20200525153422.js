const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(PORT, () => console.log('Server has started on port '${PORT}));
