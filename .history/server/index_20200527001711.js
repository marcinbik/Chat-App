const express = require("express");
const socketIO = require("socket.io");
const http = require("http");

const router = require("./router");
const {addUser,removeUser, getUser, getUserInRoom}= require("./users")

const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("We heve a new connection!");

  socket.on('join',({name,room},callback)=>{
   const {error,user}= addUser({id: socket.id,name,room});
    
   if(error) return callback(error);

   socket.emit('message',{user:'admin',text: `${user.name}, welcome to the room ${user.room}`});
   socket.broadcast.to.(user.room).emit('message',{user: 'admin',text: `${user.name},has join!`});
   socket.join(user.room);
  });

  

  socket.on("disconnect", () => {
    console.log("User has left");
  });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
