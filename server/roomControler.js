const { addRoom, removeRoom, getRoom } = require("./rooms");
const { addUser, removeUser, getUser, getUserInRoom } = require("./users");

const ChangeRoom = (idRoom, password, IdUser) => {
  if (password === getUser(room).password)
    return (getUser(IdUser).room = idRoom);
  
};

