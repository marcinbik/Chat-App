import React from 'react';

import Styles from './InfoBar.scss';

const InfoBar = () => {
  <div className={Styles.InfoBar}>
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onLineIcon}/>
      <h3>roomName</h3>

    </div>
    <div className="rightInnerContainer">
    <a href= "/"><img src={closeIcon} alt="close image"/></a>
    </div>
  </div>
}