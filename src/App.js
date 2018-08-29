import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet.find({ output: "full", location: "Cincinnati, OH" }).then(data => {
      let pets;

      if (data.petfinder.pets && data.petfinder.pets.pet) {
        if (Array.isArray(data.petfinder.pets.pet)) {
          pets = data.petfinder.pets.pet;
        } else {
          pets = [data.petfinder.pets.pet];
        }
      } else {
        pets = [];
      }
    });
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
