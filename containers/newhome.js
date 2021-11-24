import React from "react";
import styled from "styled-components";
import Header from "@/components/header";
import NoiseBackground from "@/components/noiseBackground";
import Presentacion from "@/components/home/presentacion";
import Proyecto from "@/components/home/proyecto"
import Colonias from "@/components/home/colonias";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function NewHome() {
  return (
    <Container>
      {/* Header */}
      <Header></Header>
      {/* Noise Background */} 
      <NoiseBackground></NoiseBackground>
      {/* Presentación  de entrada*/}
      <Presentacion></Presentacion>
      {/* El proyecto */}
      <Proyecto></Proyecto>
      {/* Colinas, Todas y Actuales */}
      <Colonias></Colonias>
    </Container>
  );
}
