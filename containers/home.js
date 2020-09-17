import React from "react";
import styled from "styled-components";
import HomeSearch from "@/components/general/home/homesearch";
import HomeProyecto from "@/components/general/home/homeproyecto";
import HomeGuerra from "@/components/general/home/homeguerra";
import HomeActualidad from "@/components/general/home/homeactualidad";
import HomePlaneta from "@/components/general/home/homeplaneta";
import HomeGrid from "@/components/general/home/homegrid";
import HomeDonar from "@/components/general/home/homedonarprices";

const HomeContainer = styled.div`
  width: 100%;
`;

export default function Home() {
  return (
    <HomeContainer>
      <HomeSearch />
      <HomeGrid />
      <HomeProyecto />
      <HomeGuerra />
      <HomeActualidad />
      <HomePlaneta />
      <HomeDonar />
    </HomeContainer>
  );
}