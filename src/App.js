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
        <Cities name="Krakow" time={new Date().toLocaleTimeString()} />
        <Cities name="Hamburg" time={new Date().toLocaleTimeString()} />
        <Cities
          name="Chicago"
          time={new Date().toLocaleTimeString("en-US", {
            timeZone: "America/Chicago",
          })}
        />
        <Cities
          name="Mansfield"
          time={new Date().toLocaleTimeString("en-UK", {
            timeZone: "Europe/London",
          })}
        />
      </div>
    </div>
  );
}

export default App;
