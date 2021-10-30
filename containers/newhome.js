import react from "react";
import styled from "styled-components";
import ReactTyped from "react-typed";
import Colonias from "../components/home/colonias/colonias";

const HomeContainer = styled.section`
  width: 100%;
  max-width: 1648px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NoiseBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  z-index: 1000;
  pointer-events: none;
  opacity: 0.04;
`;

const Header = styled.header`
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

const TitleContainer = styled.div`
  width: 41.6%;
  height: auto;
  margin-top: 100px;

  h1 {
    width: 100%;
    color: black;
    font-weight: 700;
    text-align: left;
    font-size: 96px;
    line-height: 120%;
    font-family: var(--poppins);
    min-height: 230px !important;
  }

  span {
    color: #105aff;
    content: "";
  }

  p {
    width: 420px;
    margin-top: 107px;
    font-family: var(--inter);
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 22px;
  }
`;

const ImagesContainer = styled.div`
  margin-top: 110px;
  width: 58.4%;
  max-width: 808px;
  min-height: 675px;
  position: relative;

  video {
    position: absolute;
    top: 10px;
    right: 0px;
    width: auto;
    z-index: 99;
    transition: 0.4s;
  }

  video:hover {
    transform: scale(1.04);
  }

  #pinturaImg {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: auto;
    transition: 0.4s;
  }

  #pinturaImg:hover {
    transform: scale(1.04);
  }
`;

const PlanetContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1648px;

  #planetText {
    width: 50%;

    h2 {
      width: 100%;
      color: black;
      font-weight: 700;
      text-align: left;
      font-size: 46px;
      line-height: 120%;
      font-family: var(--poppins);
    }
  }
`;

export default function NewHome() {
  return (
    <>
      <Header>
        <div>
          <img
            alt="Logo Historias de Malvinas"
            src="assets/logos/HistoriasDeMalvinas.svg"
            id="pinturaImg"
          />
        </div>
      </Header>
      <NoiseBackground
        style={{ backgroundImage: "url(/assets/images/noise.gif)" }}
      ></NoiseBackground>
      <HomeContainer>
        <TitleContainer>
          <h1>
            Historias de
            <br />
            <ReactTyped
              strings={[
                "Malvinas.",
                "argentinos.",
                "heroes.",
                "madres.",
                "pibes.",
              ]}
              typeSpeed={60}
              backSpeed={60}
              backDelay={3500}
              showCursor={false}
              loop
              smartBackspace
            />
          </h1>
          <p>
            Historias de Malvinas, es un proyecto de repositorio web público y
            participativo, pensado, diseñado y desarrollado por Facundo Brahim,
            estudiante de Lic. en tecnología multimedial en la UMAI.
            <br />
            <br />
            Su indetidad inspirada en la Cruz de Hierro y la bandera de Tierra
            del Fuego e Islas del Atlántico Sur, busca conceptualizar el reclamo
            argentino de soberania desde herramientas gráficas, invitando a los
            veteranos de Malvinas y familiares, estudiantes, investigadores,
            etc, a formar parte con sus historias.
          </p>
        </TitleContainer>
        <ImagesContainer>
          <video width="560" height="352" loop="true" autoplay="autoplay" muted>
            <source src="assets/video/loop.mp4" type="video/mp4" />
          </video>
          <img
            alt="Soldados de Malvinas"
            src="assets/images/home/Home2.png"
            id="pinturaImg"
          />
        </ImagesContainer>
        <Colonias />
      </HomeContainer>
    </>
  );
}
