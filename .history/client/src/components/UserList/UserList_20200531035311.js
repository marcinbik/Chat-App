import React,{useState,useEffect} from 'react';



const UserList = (room,socket) => {
const [userList, setUserList] = useState([]);

useEffect(()=>{
  socket.on("getUserInRoom",(room)=>{
    setUserList((user)=>[...userList, user]);
  })
},)
return(
  <></>
);


}
export default UserList;