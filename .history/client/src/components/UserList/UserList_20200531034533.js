import React,{useState,useEffect} from 'react';



const UserList = (room,socket) => {
const [UserList, setUserList] = useState([]);

useEffect(()=>{
  socket.on("getUserInRoom",(room)=>{
    setUserList((user)=>[...UserList, user]);
  })
},[])



}
export default UserList;