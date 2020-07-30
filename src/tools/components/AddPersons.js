import React, {useState, memo, useEffect} from "react";
import "./AddPersons.css";

import {PersonContext} from "../datas/PersonProvider";

const AddPersons = () => {
  const [inputValue, setInputValue] = useState({name: "", age: ""});

  useEffect(() => {
    console.log("AddPerson is rendering...");
  });

  return (
    <div className="add-persons">
      <input
        value={inputValue.name}
        onChange={(event) => {
          setInputValue({...inputValue, name: event.target.value});
        }}
        placeholder="add name"
      />
      <input
        value={inputValue.age}
        onChange={(event) => {
          setInputValue({...inputValue, age: event.target.value});
        }}
        placeholder="add age"
      />
      <PersonContext.Consumer>
        {(ctx) => {
          return (
            <button
              onClick={() => {
                ctx.addPerson(inputValue.name, inputValue.age);
                setInputValue({name: "", age: ""});
              }}
            >
              Add
            </button>
          );
        }}
      </PersonContext.Consumer>
    </div>
  );
};

export default memo(AddPersons);
