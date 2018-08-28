/* global React ReactDOM */
const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
