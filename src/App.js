import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You cliked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Ghost",
        animal: "Dog",
        breed: "Husky"
      }),
      React.createElement(Pet, {
        name: "Summer",
        animal: "Dog",
        breed: "Husky"
      }),
      React.createElement(Pet, {
        name: "Nymeria",
        animal: "Dog",
        breed: "Husky"
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById("root"));
