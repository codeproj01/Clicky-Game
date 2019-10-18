import React from "react";
import "../App.css";

function Header(props) {
  return (
    <div className="Header">
      <div>
        React Clicky Game
      </div>
      <div>{props.message}</div>
      <div>
        Score: {props.score} 
        <br></br>
        High Score: {props.highscore}
      </div>
    </div>
  );
}

export default Header;
