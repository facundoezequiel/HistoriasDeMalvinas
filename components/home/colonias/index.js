import React, { useState } from "react";
import PlanetColonias from "./planeta/planetColonias";
import PlanetActual from "./planeta/planetActual";
import ChangePlanetMenu from "./planeta/changePlanetMenu";
import Container from "./styled";

export default class Colonias extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      currentMode: "todas",
    };
  }

  getPlanet(currentMode) {
    const planets = {
      todas: <PlanetColonias />,
      actuales: <PlanetActual />,
    };
    return planets[currentMode];
  }

  togglePlanets = (currentMode) => {
    this.setState({ currentMode });
  };

  render() {
    return (
      <Container>
          <h2>Basta de imperialismo</h2>
          <p>Colonias Británicas</p>
          <ChangePlanetMenu
            togglePlanets={this.togglePlanets}
          ></ChangePlanetMenu>
        <div id="rightContainer">{this.getPlanet(this.state.currentMode)}</div>
      </Container>
    );
  }
}
