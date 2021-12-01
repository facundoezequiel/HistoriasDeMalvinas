import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 70px 0px 0px 0px;
  background-color: var(--white);

  h2 {
    width: 100%;
    color: black;
    font-weight: 700;
    text-align: center;
    font-size: 36px;
    font-family: var(--poppins);
  }

  p {
    width: 100%;
    margin-top: 10px;
    font-family: var(--inter);
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
  }

  canvas {
    width: 1700px !important;
    height: auto !important;
    pointer-events: none;
    margin: -40px 0px 0px 0px;
    z-index: 1;
  }
`;

export default Container;
