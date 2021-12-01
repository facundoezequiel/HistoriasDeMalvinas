import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "@/components/header";
import NoiseBackground from "@/components/noiseBackground";
import Presentacion from "@/components/home/presentacion";
import Proyecto from "@/components/home/proyecto"
import HistoriasDestacadas from "@/components/home/historiasDestacadas"
import Guerra from "@/components/home/guerra";
import Colonias from "@/components/home/colonias";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default function NewHome({ dataCards }) {
  const { userAuth, userData } = useAuthState();
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
      {/* Historias destacadas*/}
      <HistoriasDestacadas dataCards={dataCards} />
      {/* Guerra 1982 */}
      <Guerra></Guerra>
      {/* Colinas, Todas y Actuales */}
      <Colonias></Colonias>
    </Container>
  );
}
