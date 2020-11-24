import "./Container.css";
import { useState } from "react";

//FUCTION COMPONENT
const Container = ({ bgColor, title, body, children }) => {
  return (
    <section
      className="container"
      style={{
        backgroundSize: "cover",
        backgroundColor: bgColor,
      }}
    >
      <h1> {title} </h1>
      <p> {body} </p>

      {children}
    </section>
  );
};
export default Container;

/*import "./Container.css";
import React from "react";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "KHOPIPAH",
      address: "Cipondoh",
    };
  }

  render() {
    return (
      <main className="container">
        <h1>Wellcome Home</h1>
        <h3>{this.state.name}</h3>
        <h3>{this.state.address}</h3>
      </main>
    );
  }
}*/
