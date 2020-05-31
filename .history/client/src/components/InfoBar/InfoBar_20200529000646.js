import React from 'react';

import closeIcon from "../../icons/closeIcon.png"
import onlineIcon from "../../icons/onlineIcon.png"

import Styles from './InfoBar.module.scss';

const InfoBar = ({room}) => (
  <div className={Styles.InfoBar}>
    <div className={Styles.leftInnerCotainer}>
      <img className="onlineIcon" src={onlineIcon} alt="online icon"/>
      <h3>{room}</h3>

    </div>
    <div className={Styles.rigthInnerCotainer}>
    <a href= "/"><img src={closeIcon} alt="close image"/></a>
    </div>
  </div>
)
export default InfoBar;