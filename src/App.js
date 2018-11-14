import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "7a40df81031f86d31667be776dd6acd9";

class App extends Component {
  getWeather = async e => {
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
