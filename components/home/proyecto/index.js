import React from "react";
import Container from "./styled";
import LogoAnimationLottie from "@/components/home/proyecto/logolottieanimation/logoanimationlottie";

class HomeProyecto extends React.Component {
  render() {
    return (
      <Container>
        <div className="textContainer">
          <h2>
            El proyecto: <span>#NoLosOlvidamos</span>
          </h2>
          <p>
            Su indetidad inspirada en la Cruz de Hierro y la bandera de Tierra
            del Fuego e Islas del Atlántico Sur, busca conceptualizar el reclamo
            argentino de soberania desde herramientas gráficas, invitando a los
            veteranos de Malvinas y familiares, estudiantes, investigadores,
            etc, a formar parte con sus historias.
            <br></br>
            <br></br>
            Su
            <span> misión </span>
            busca revindicar el reclamo de soberanía de la República Argentina,
            sobre las Islas Malvinas, Georgias y Sandwich del Sur, de una
            innovadora forma digital, ante el colonialismo de facto y anticuado
            del Reino Unido.
          </p>
        </div>
        <div className="animationLottie">
          <LogoAnimationLottie />
        </div>
      </Container>
    );
  }
}

export default HomeProyecto;
