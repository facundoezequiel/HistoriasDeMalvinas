import styled from "styled-components";
import { breakpoints } from "@/constants/media";

const CardRegistroContainer = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .containerDiv1,
  .containerDiv2 {
    width: 50%;
    height: 100vh;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      margin: 0 auto;
    }
  }

  .containerDiv1 {
    background-color: #fafafa;
    justify-content: flex-end;
    @media (max-width: ${breakpoints.mobile}) {
      display: none !important;
    }
  }

  .containerDataDiv1 {
    width: 37%;
    margin: 0% 10% 0% 10%;
    min-width: 355.19px;
  }

  .containerDiv2 {
    background-color: var(--white);
    justify-content: flex-start;
  }

  .containerDataDiv2 {
    width: 37%;
    min-width: 355.19px;
    margin: 0% 10% 0% 10%;
    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 auto;
    }
  }

  .containerLogos {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .containerLogosMobile {
    display: none;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 9%;
    }
  }

  h3 {
    margin-top: 7%;
    width: 100%;
    text-align: left;
  }

  p {
    margin-top: 5%;
  }

  form {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .buttonRegistro {
    margin-top: 10%;
  }

  p span {
    color: var(--orange);
  }

`;

export { CardRegistroContainer };
