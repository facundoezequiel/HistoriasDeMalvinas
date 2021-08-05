import styled from "styled-components";
import { breakpoints } from "@/constants/media";

const CardIniciarSesionContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  // Left and right sections containers

  #rightContainer,
  #leftContainer {
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
    background-color: var(--gray);
  }

  #rightContainer {
    justify-content: flex-start;
    background-color: var(--white);
    content: "";
  }

  // Left and right data containers

  #dataLeftContainer,
  #dataRightContainer {
    width: 100%;
    max-width: 500px;
    margin: 0px 100px 0px 0px;
  }

  #dataRightContainer {
    margin: 0px 0px 0px 100px !important;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  /* ---- Left Section ---- */

  // Logos

  #logosLeftContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  #logosLeftContainer img {
    max-width: 170px;
    height: auto;
    display: block;
  }

  #dedicatedLogo {
    max-width: 70px !important;
  }

  // Title

  #dataLeftContainer h3 {
    margin: 40px 0px 0px 0px;
    font-size: 1.8em;
    font-style: normal;
    color: var(--black);
    font-family: var(--inter);
    font-weight: 700;
  }

  // Text

  #dataLeftContainer p {
    margin: 40px 0px 0px 0px;
    font-size: 0.9em;
    font-style: normal;
    color: var(--black);
    font-family: var(--inter);
    font-weight: 400;
    line-height: 180%;
  }

  #dataLeftContainer p span {
    color: var(--orange);
  }

  // Signature

  #signature {
    margin: 40px 80px 0px 0px;
    width: 110px;
    float: right;
  }

  /* ---- Right Section ---- */

  // Text

  #dataRightContainer p {
    margin: 0px 0px 0px 0px;
    font-size: 0.9em;
    font-style: normal;
    color: var(--black);
    font-family: var(--inter);
    font-weight: 400;
    line-height: 180%;
  }

  // Form

  #dataRightContainer form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #dataRightContainer form input {
    width: 100%;
    padding: 4% 5% 4% 5%;
    margin: 40px 0px 0px 0px;
    border: 0px;
    background-color: var(--gray);
    border-radius: 10px;
  }

  #dataRightContainer form input::placeholder {
    font-size: 1em;
    font-style: normal;
    color: var(--black);
    font-family: var(--inter);
    font-weight: 400;
    line-height: 180%;
  }

  #dataRightContainer form button {
    width: 60%;
    padding: 3% 5% 3% 5%;
    margin: 30px 0px 0px 0px;
    font-family: var(--inter);
    font-size: 0.9em;
    font-weight: 700;
    text-align: center;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    color: var(--white);
    transition: 0.2s;
    background: #ff6a00;
    background: -moz-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, #ff6a00),
      color-stop(100%, #ffbb00)
    );
    background: -webkit-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
    background: -o-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
    background: -ms-linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
    background: linear-gradient(45deg, #ff6a00 0%, #ffbb00 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ff6a00', endColorstr='#ffbb00', GradientType=1 );
  }

  #facebookButton {
    background: #105cff !important;
    background: -moz-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, #105cff),
      color-stop(100%, #05cdff)
    );
    background: -webkit-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
    background: -o-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
    background: -ms-linear-gradient(45deg, #105cff 0%, #05cdff 100%);
    background: linear-gradient(45deg, #105cff 0%, #05cdff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#105cff', endColorstr='#05cdff', GradientType=1 );
  }

  #lectorButton {
    width: 60%;
    padding: 3% 0% 3% 0%;
    margin: 30px 0px 0px 0px;
    font-family: var(--inter);
    font-size: 0.9em;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
    color: var(--black);
    text-decoration: none;
    transition: 0.2s;
    background: rgba(163, 163, 163, 1);
    background: -moz-linear-gradient(
      45deg,
      rgba(163, 163, 163, 1) 0%,
      rgba(235, 235, 235, 1) 100%
    );
    background: -webkit-gradient(
      left bottom,
      right top,
      color-stop(0%, rgba(163, 163, 163, 1)),
      color-stop(100%, rgba(235, 235, 235, 1))
    );
    background: -webkit-linear-gradient(
      45deg,
      rgba(163, 163, 163, 1) 0%,
      rgba(235, 235, 235, 1) 100%
    );
    background: -o-linear-gradient(
      45deg,
      rgba(163, 163, 163, 1) 0%,
      rgba(235, 235, 235, 1) 100%
    );
    background: -ms-linear-gradient(
      45deg,
      rgba(163, 163, 163, 1) 0%,
      rgba(235, 235, 235, 1) 100%
    );
    background: linear-gradient(
      45deg,
      rgba(163, 163, 163, 1) 0%,
      rgba(235, 235, 235, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a3a3a3', endColorstr='#ebebeb', GradientType=1 );
  }

  #registerText {
    margin: 30px 0px 0px 0px !important;
    font-family: var(--inter);
    font-size: 0.9em;
    font-weight: 400;
    text-align: center;
    color: var(--black);
  }

  #registerText a {
    color: var(--orange);
    font-weight: 700;
    text-decoration: none;
  }

  #dataRightContainer form button:hover,
  #lectorButton:hover {
    transform: scale(1.03);
  }
`;

export { CardIniciarSesionContainer };
