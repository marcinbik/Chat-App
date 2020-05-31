import React,{useState} from "react"; 
import {Link} from "react-router-dom";
import Styles from "./Join.module.scss"
const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className = {Styles.joinOuterContainer}>
      <div className = {Styles.joinInnerContainer}>
        <h1 className = {Styles.heading}>Join</h1>
          <div><input placeholder="Name" className={Styles.joinInput} type="text" onChange={setName}/></div>
          <div><input placeholder="Room" className={Styles.joinInput} type="text" onChange={setRoom}/></div>
          <Link>
          <button className={Styles.button} ></button>
          </Link>
      </div>
    </div>
  )
}

export default Join;