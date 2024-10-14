import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import Cub from "../Cub/Cub";

export default function TicTacToe() {
  const [state, setState] = useState(0);

  function clear() {
  }

  return (
    <div>
      <h1 className="user">{state === 0 ? "First user" : "Second user"}</h1>
      <div className="MainBoard">
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
        <Cub state={state} setState={setState} />
      </div>
      <div className="navigateBar">
        <button className="btn" onClick={clear}>
          Repeat
        </button>
      </div>
    </div>
  );
}
