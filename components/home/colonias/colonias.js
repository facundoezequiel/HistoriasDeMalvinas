import React, { useState } from "react";
import styled from "styled-components";
import PlanetColonias from "./planetColonias";
import PlanetActual from "./planetActual";
import ChangePlanetMenu from "./changePlanetMenu";

const ColoniasContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1648px;
  overflow: hidden;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    align-content: center;
  }

  #leftContainer {
    justify-content: flex-start !important;
    align-content: flex-start !important;
    flex-wrap: wrap;
    margin-top: 150px;

    h2 {
      width: 100%;
      color: black;
      font-weight: 700;
      text-align: left;
      font-size: 36px;
      line-height: 120%;
      font-family: var(--poppins);
    }

    p {
      width: 100%;
      margin-top: 10px;
      font-family: var(--inter);
      font-style: normal;
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
    }
  }

  canvas {
    width: 1700px !important;
    height: auto !important;
    pointer-events: none;
  }
`;

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
      <ColoniasContainer>
        <div id="leftContainer">
          <h2>Basta de imperialismo</h2>
          <p>Colonias Británicas</p>
          <ChangePlanetMenu
            togglePlanets={this.togglePlanets}
          ></ChangePlanetMenu>
        </div>
        <div id="rightContainer">{this.getPlanet(this.state.currentMode)}</div>
      </ColoniasContainer>
    );
  }
}
