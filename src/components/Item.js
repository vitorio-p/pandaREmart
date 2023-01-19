import React from "react";

export default function Item(props) {
  return (
    <React.Fragment key={props._id}>
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Type: {props.type}</p>
          <p className="card-text">Price: {props.price}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
