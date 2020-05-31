import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import Styles from "./Chat.module.scss";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage]= useState("");
  const [messages, setMessages]= useState([]);
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.off();
    };

    console.log(socket);
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

const sendMessage = (event) =>{
  if (message)
}

  return (
    <div className={Styles.outerContainer}>
      <div className={Styles.container}>
        <input
          value={message}
          onChange={(event) => setMessages(event.target.value)}
        onKeyPress={event => event.key === 'Enter' ? sendMessage(event):null}
        />
      </div>
    </div>
  );
};

export default Chat;
