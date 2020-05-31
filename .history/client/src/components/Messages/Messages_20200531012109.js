import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import Styles from './Messages.module.scss';

const Messages = ({messages,name}) =>(
<ScrollToBottom className = {(Styles.Messages)} >
  {messages.map((message,i)=><div key={i}> <Message message={message} name={name}/> </div>)};
</ScrollToBottom>

)

export default Messages;