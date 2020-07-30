import React, {useEffect} from "react";
import "./Persons.css";

import {PersonContext} from "../datas/PersonProvider";
import PersonComponent from "./Person";

export default React.memo(() => {
  useEffect(() => {
    console.log("Persons is Rendering...");
  });

  return (
    <div className="persons">
      <PersonContext.Consumer>
        {(ctx) =>
          ctx.state.persons.map((item, index) => {
            return (
              <PersonComponent
                key={index}
                name={item.name}
                age={item.age}
                del={() => ctx.deletePerson(index)}
              />
            );
          })
        }
      </PersonContext.Consumer>
    </div>
  );
});
