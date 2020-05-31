import React,{useState,useEffect} from 'react';
import io from'socket.io-client';


const UserList = (room,socket) => {
const [UserList, setUserList] = useState([]);

useEffect(()=>{
  socket.on("getUserInRoom",(room)=>{
    setUserList((user)=>[...])
  })
})



}
export default UserList;