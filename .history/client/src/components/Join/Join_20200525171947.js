import React,{useState} from "react"; 
import {Link} from "react-router-dom";
import Styles from "./Join.module.scss"
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className = {Styles.joinOuterContainer}>
      <div className = {Styles.joinInnerContainer}>
        <h1 className = {Styles.heading}></h1>
      </div>
    </div>
  )
}

export default Join;