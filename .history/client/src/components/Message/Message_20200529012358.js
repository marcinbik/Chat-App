import React from "react";

import Styles from "./Message.module.scss";
import Messages from "../Messages/Messages";

const Message = ({ message, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLower.Case();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className={(Styles.messageContainer, Styles.jutifyEnd)}>
      <p className={Styles.snetText}>{trimmedName}</p>
      <div className={Styles.messageBox}>
        <p className={Styles.messageText}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={(Styles.messageContainer, Styles.jutifyStart)}>
      <p className={Styles.snetText}>{trimmedName}</p>
      <div className={Styles.messageBox}>
        <p className={Styles.messageText}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
