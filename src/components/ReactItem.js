import React from "react";

const ReactItem = props => {
  return (
    <div>
      <img
        src={props.reactitem.img}
        id={props.reactitem.id}
        alt={props.reactitem.name}
        onClick={event => {
          event.preventDefault();
          props.reactitemclick(props.reactitem.id);
        }}
      />
    </div>
  );
};

export default ReactItem;
