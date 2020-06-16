import React from "react";
import "./App.css";
import Cities from "./Cities";

function App() {
  return (
    //Components with different weather forecast

    <div className="App">
      <Cities name="Krakow" />
      <Cities name="Hamburg" />
      <Cities name="Chicago" />
      <Cities name="Mansfield" />
    </div>
  );
}

export default App;
