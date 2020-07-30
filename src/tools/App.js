import React from "react";

import PersonProvider from "./datas/PersonProvider";
import Persons from "./components/Persons";
import AddPersons from "./components/AddPersons";

export default function App() {
  return (
    <div style={classes.reactApp}>
      <PersonProvider>
        <AddPersons />
        <Persons />
      </PersonProvider>
    </div>
  );
}

const classes = {
  reactApp: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
  },
};
