import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0px 0px 0px 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  align-content: center;
  min-height: 650px;
  border-bottom: 1px solid #e3e3e3;

  // Title
  h1 {
    width: 100%;
    color: black;
    font-weight: 700;
    text-align: center;
    font-size: 96px;
    line-height: 120%;
    font-family: var(--poppins);
    min-height: 232px !important;
    margin: 0px 0px 0px 0px;
  }

  // React Typed Title
  span {
    color: #105aff;
    content: "";
  }

  // Text
  p {
    width: 100%;
    max-width: 550px;
    margin: 60px 0px 0px 0px ;
    font-family: var(--inter);
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
  }
`;

export default Container;