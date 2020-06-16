import React, { Component } from "react";
import "./Cities.css";
import Icons from "./Icons";

export default class Cities extends Component {
  state = {
    temp: "",
    pressure: "",
    desc: "",
    icon: "",
  };

  //Create component to fetch weather forecast (cities from props)

  componentDidMount() {
    const KEY = "a051e71017506e78401e478e6128563d";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.props.name}
      &appid=${KEY}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("ok");

        this.setState({
          temp: Math.floor(data.main.temp),
          pressure: data.main.pressure,
          desc: data.weather[0].main,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: true,
        });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.name}</h1>
        <br />
        <h2>temperatura: {this.state.temp} °C</h2>
        <h2>ciśnienie: {this.state.pressure} hPa</h2>
        <br />
        <Icons icon={this.state.icon} />
        <br />
        <h2>godzina: {this.props.time}</h2>
      </div>
    );
  }
}
