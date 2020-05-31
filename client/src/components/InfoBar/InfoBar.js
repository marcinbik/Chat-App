import React from 'react';

import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"

import Styles from './InfoBar.module.scss';

const InfoBar = ({room}) => (
  <div className={Styles.infoBar}>
    <div className={Styles.leftInnerContainer}>
      <img className={Styles.onlineIcon} src={onlineIcon} alt="online icon"/>
      <h3>{room}</h3>

    </div>
    <div className={Styles.rightInnerContainer}>
    <a href= "/"><img src={closeIcon} alt="close"/></a>
    </div>
  </div>
)
export default InfoBar;