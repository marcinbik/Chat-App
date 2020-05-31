import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import Styles from '../UserList/UserList.module.scss';

const UserList = ({userList}) => (

<div className={Styles.textContainer}>
  {
    userList
    ?(
      <div>
        <h1>People currently chatting</h1>
        <div className={Styles.activeContainer}></div>
      <h2>
        {userList.map(({name})=>
        <div key={name} className={Styles.activeItem}>
          {name}
          <img src={onlineIcon} alt="Online Icon"/>
        </div>)}
      </h2>
      </div>
    )
    : null
  }
</div>


)
export default UserList;