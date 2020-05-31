import React from 'react';

import Styles from './Input.module.scss';

const Input ({message, setMessage, sendMessage}) => (
  <form className= {Styles.form}>
 <input
          className={Styles.input}
          type="text"
          placeholder="message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
        <button></button>
  </form>
)

export default Input;