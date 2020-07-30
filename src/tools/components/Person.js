import React from "react";
import "./Persons.css";

export default (props) => {
  return (
    <div className="person">
      <span className="person-delete" onClick={props.del}>
        <p>Delete</p>
      </span>

      <div className="person-container">
        <span className="person-name">{props.name}</span>
        <span className="person-age">{props.age}</span>
      </div>
    </div>
  );
};
