import React from 'react';

import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon"

import Styles from './InfoBar.scss';

const InfoBar = ({room}) => (
  <div className={Styles.InfoBar}>
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online image"/>
      <h3>{room}</h3>

    </div>
    <div className="rightInnerContainer">
    <a href= "/"><img src={closeIcon} alt="close image"/></a>
    </div>
  </div>
)
export default InfoBar;