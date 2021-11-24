import styled from "styled-components";

const Container = styled.section`
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

export default Container;