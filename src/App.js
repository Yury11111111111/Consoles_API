import React from 'react'
import { useState } from "react";
import Console from "./componets/Console";
import Manyconsoles from "./json/console";

function App() {
  const [consoles, setConsoles] = useState([...Manyconsoles]);

  return (
    <div className="App">
      {consoles.map((console, index) => {
        return <Console console={console} key={index}/>;
      })}
    </div>
  );
}

export default App;
