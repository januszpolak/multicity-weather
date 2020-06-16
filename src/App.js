import React from "react";
import "./App.css";
import Cities from "./Cities";
import Today from "./Today";

function App() {
  return (
    //Components with different weather forecast
    <div className="App">
      <Today />
      <div className="app">
        <Cities name="Krakow" />
        <Cities name="Hamburg" />
        <Cities name="Chicago" />
        <Cities name="Mansfield" />
      </div>
    </div>
  );
}

export default App;
