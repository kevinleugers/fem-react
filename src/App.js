import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You cliked the title");
  }
  render() {
    return (
      <div>
        <h1>Adopt Me</h1>
        <Pet name="Ghost" animal="Dog" breed="Husky" />
        <Pet name="Summer" animal="Dog" breed="Husky" />
        <Pet name="Nymeria" animal="Dog" breed="Husky" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
