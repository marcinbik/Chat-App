import React,{useState,useEffect} from "react";
import queryString from 'query-string';
import io from 'socket.io-client';


const [name, setName] = useState("");
const [room, setRoom] = useState("");

const Chat = ({location}) => {
  useEffect(()=>
  {
    const {name, room} = queryString.parse(location.search);
    console.log(location.search);
    console.log(name,room);
  })
  return (
    <h1>Chat</h1>
  )
}

export default Chat;