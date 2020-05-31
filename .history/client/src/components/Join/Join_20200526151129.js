import React, { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Join.module.scss";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={Styles.joinOuterContainer}>
      <div className={Styles.joinInnerContainer}>
        <h1 className={Styles.heading}>Join</h1>
        <div>
          <input
            placeholder="Name"
            className={Styles.joinInput}
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className={Styles.joinInput}
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={'/chat?name=${name}&room=${room}'}
        >
          <button className={Styles.button} type="submit">
            Sing In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
