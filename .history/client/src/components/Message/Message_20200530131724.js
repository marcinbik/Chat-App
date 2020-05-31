import React from "react";

import Styles from "./Message.module.scss";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  console.log(name);
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={(Styles.messageContainer, Styles.justifyEnd)}>
      <p className={Styles.snetText}>{trimmedName}</p>
      <div className={(Styles.messageBox, Styles.backgroundBlue)}>
        <p className={(Styles.messageText, Styles.colorWhite)}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={(Styles.messageContainer, Styles.justifyStart)}>
      <div className={(Styles.messageBox, Styles.backgroundLight)}>
        <p className={(Styles.messageText, Styles.colorDark)}>{text}</p>
      </div>
      <p className={Styles.snetText , Styles.pl10 }>{user}</p>
    </div>
  );
};

export default Message;
