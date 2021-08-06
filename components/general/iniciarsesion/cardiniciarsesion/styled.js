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

  #leftContainer {
    min-width: 550px;
    max-width: 550px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #f5f8ff;
    box-shadow: 1px 0px 50px rgba(0, 0, 0, 0.19);
    z-index: 99;
  }

  #rightContainer {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: var(--gray);
  }

  // Left and right data containers

  #dataLeftContainer {
    width: 100%;
    max-width: 350px;
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
    max-width: 130px;
    height: auto;
    display: block;
  }

  #dedicatedLogo {
    max-width: 50px !important;
  }

  // Title

  #dataLeftContainer h3 {
    margin: 60px 0px 0px 0px;
    font-size: 1.6em;
    font-style: normal;
    color: var(--black);
    font-family: var(--inter);
    font-weight: 700;
  }

  // Text

  #dataLeftContainer p {
    margin: 40px 0px 30px 0px;
    font-size: 0.8em;
    font-style: normal;
    color: gray;
    font-family: var(--inter);
    font-weight: 400;
    line-height: 180%;
  }

  // Form

  #dataLeftContainer form {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  #dataLeftContainer form input {
    width: 100%;
    padding: 4% 5% 4% 5%;
    margin: 30px 0px 0px 0px;
    border: 1px solid #e1e6f9;
    background-color: #fff;
    border-radius: 8px;
    transition: 0.2s all;
  }

  #dataLeftContainer form input::placeholder {
    font-size: 0.9em;
    font-style: normal;
    color: gray;
    font-family: var(--inter);
    font-weight: 400;
    line-height: 180%;
  }

  #dataLeftContainer form input:focus {
    border: 1px solid #275efe;
  }

  #buttonsContainer {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #submitButton {
    width: 100%;
    padding: 6% 5% 6% 5%;
    margin: 60px 0px 0px 0px;
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
    margin: 20px 0px 0px 0px !important;
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
    width: 100%;
    padding: 6% 5% 6% 5%;
    margin: 20px 0px 0px 0px;
    border-radius: 10px;
    border: 0px;
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

  #lectorButton a {
    text-decoration: none;
    color: var(--black);
    font-family: var(--inter);
    font-size: 1em;
    font-weight: 700;
    text-align: center;
  }

  #registerText {
    margin: 60px 0px 0px 0px !important;
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
    transition: 0.2s all;
  }

  #registerText a:hover {
    color: gray;
  }

  #dataLeftContainer form button:hover,
  #lectorButton:hover {
    transform: scale(1.02);
  }
`;

export { CardIniciarSesionContainer };
