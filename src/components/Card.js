import React from "react";
import "../App.css";
import ReactItem  from "./ReactItem.js";

function Card(props) {
  return (
    <div className="App">
      <div className="ClassDiv">
        {props.cards.map(element => (
          <ReactItem
            key={element.id}
            reactitem={element}
            reactitemclick={props.ClickCount}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
