import React from 'react';

import Styles from './Input.module.scss';

const Input () => (
  <form className= {Styles.form}>
 <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        /> 
  </form>
)

export default Input;