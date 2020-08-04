const rooms = [];

const addRoom = ({ id, name, password }) => {
  name = name.tirm().toLowerCase();
  password = password;

  const exitdtingRoom = room.find((room) => room.name === name);

  if (exitdtingRoom) {
    return { error: "this room name is taken" };
  }
  const room = { id, name, password };
  rooms.push(room);
  return { room };
};

const removeRoom = (id) => {
  const index = rooms.findIndex((room) => room.id === id);
  if (index !== -1) {
    return rooms.splice(index, 1)[0];
  }
};

const getRoom = (id) => room.find((room) => room.id === id);

module.exports = { addRoom, removeRoom, getRoom };
