import React from "react";
import Container from "./styled"
import ReactTyped from "react-typed";

export default function Presentacion() {
  return (
    <Container>
      {/* Title */}
      <h1>
        Historias de
        <br />
        {/* React Typed Title */}
        <ReactTyped
          strings={["Malvinas.", "argentinos.", "heroes.", "madres.", "pibes."]}
          typeSpeed={60}
          backSpeed={60}
          backDelay={3500}
          showCursor={false}
          loop
          smartBackspace
        />
      </h1>
      {/* Text */}
      <p>
        Historias de Malvinas, es un proyecto de repositorio web sin fines de lucro, público y
        participativo, pensado, diseñado y desarrollado por Facundo Brahim,
        estudiante de Lic. en tecnología multimedial en la UMAI.
      </p>
    </Container>
  );
}
