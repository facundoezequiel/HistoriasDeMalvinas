import React from "react";
import styled, { css } from "styled-components";

// Page Container
const ChangePlanetNav = styled.nav`
  height: 30px;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  background-color: #262626;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
`;

const PlanetButton = styled.button`
  height: 100%;
  min-width: 106px !important;
  padding: 0px 25px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 200px 200px 200px 200px;
  -moz-border-radius: 200px 200px 200px 200px;
  -webkit-border-radius: 200px 200px 200px 200px;
  border: 0px;
  background-color: #262626;
  z-index: 99;

  @keyframes changeBackground {
    from {
      background-color: #262626;
    }
    to {
      background-color: #1960ff;
    }
  }

  ${(props) =>
    props.active === 1 &&
    css`
      :nth-child(1) {
        animation: changeBackground 0.2s ease-in;
        background-color: #1960ff;
        :hover > p {
          color: #fff !important;
        }
        p {
          font-weight: 700 !important;
        }
      }
    `};

  ${(props) =>
    props.active === 2 &&
    css`
      :nth-child(2) {
        animation: changeBackground 0.2s ease-in;
        background-color: #1960ff;
        :hover > p {
          color: #fff !important;
        }
        p {
          font-weight: 700 !important;
        }
      }
    `};

  // Hover Buttons Text Color
  :hover {
    cursor: pointer;
  }
  :hover > p {
    color: #999999;
  }
  // Buttons Text
  p {
    font-size: 0.8em !important;
    font-family: "Poppins", sans-serif !important;
    text-align: center !important;
    color: #fff !important;
    text-rendering: optimizeLegibility;
    transition: 0.2s;
    margin: 0px 0px 0px 0px !important;
    text-transform: uppercase;
  }
`;

var number = 1;

export default class ChangePlanetMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 1 };
  }

  handleSelect(key, planetsCategory) {
    this.props.togglePlanets(planetsCategory);
    this.setState({ key });
    number = key;
  }

  render() {
    return (
      <ChangePlanetNav activeKey={this.state.key}>
        <PlanetButton
          eventKey={1}
          title="Todas"
          onClick={() => this.handleSelect(1, "todas")}
          active={number}
        >
          <p>TODAS</p>
        </PlanetButton>
        <PlanetButton
          eventKey={2}
          title="Actuales"
          onClick={() => this.handleSelect(2, "actuales")}
          active={number}
        >
          <p>ACTUALES</p>
        </PlanetButton>
      </ChangePlanetNav>
    );
  }
}
