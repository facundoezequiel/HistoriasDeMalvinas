import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  z-index: 1000;
  pointer-events: none;
  opacity: 0.04;
`;

export default function NoiseBackground() {
  return (
    <Container
      style={{ backgroundImage: "url(/assets/images/noise.gif)" }}
    ></Container>
  );
}
