import React from "react";
import "./Icons.css";

//this component show weather icon from openweather.org API

const Icons = (props) => {
  const icon = props.icon;
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="weather icon"
        width="100px"
      />
    </div>
  );
};

export default Icons;
