import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e7e7e7;
  background-color: #fbfbfb;

  div {
    width: 100%;
    height: 100%;
    max-width: 1648px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
`;

export default function Header() {
  return (
    <Container>
        <div>
          <img
            alt="Logo Historias de Malvinas"
            src="assets/logos/HistoriasDeMalvinas.svg"
            id="pinturaImg"
          />
        </div>
    </Container>
  );
}
