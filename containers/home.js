import React, { useEffect } from "react";
import styled from "styled-components";
import HomeSearch from "@/components/general/home/homesearch";
import HomeProyecto from "@/components/home/proyecto";
import HomeGuerra from "@/components/general/home/homeguerra";
import HomeActualidad from "@/components/general/home/homeactualidad";
import HomeGrid from "@/components/general/home/homegrid";
import HomeDonar from "@/components/general/home/homedonarprices";
import Navbar from "@/components/general/Nav/navbar";
import Fade from "react-reveal/Fade";
import Headroom from "react-headroom";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";

const HomeContainer = styled.div`
  width: 100% !important;
`;

export default function Home({ dataCards }) {
  const { userAuth, userData } = useAuthState();
  return (
    <HomeContainer>
      <Headroom>
        <Navbar />
      </Headroom>
      <Fade>
        <HomeSearch />
      </Fade>
      <Fade duration={800}>
        <HomeGrid dataCards={dataCards} />
      </Fade>
      <Fade duration={800}>
        <HomeProyecto />
      </Fade>
      <Fade duration={800}>
        <HomeGuerra />
      </Fade>
      <Fade duration={800}>
        <HomeActualidad />
      </Fade>
      <Fade duration={800}>
        <HomeDonar />
      </Fade>
    </HomeContainer>
  );
}
