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
      <div className={Styles.messageBox, Styles.backgroundBlue}>
        <p className={Styles.messageText, Styles.colorWhite}>{text}</p>
      </div>
    </div>
  ) : (
    <div className={(Styles.messageContainer, Styles.jutifyStart)}>
      <p className={Styles.snetText}>{trimmedName}</p>
      <div className={Styles.messageBox, Styles.backgroundLight }>
        <p className={Styles.messageText, Styles.colorDark}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
