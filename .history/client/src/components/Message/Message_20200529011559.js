import React from 'react';

import Styles from "./Message.module.scss";


const Message = ({mesage, name}) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLower.Case();

  if(user === trimmedName){
    isSentByCurrentUser = true;
  }

  return(
    isSentByCurrentUser
    ?(
      <div></div>
    )
  )

}

export default Message;