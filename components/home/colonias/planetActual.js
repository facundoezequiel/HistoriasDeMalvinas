import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

let Globe = () => null;
if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

export default function PlanetActual() {
  const globeEl = useRef();

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = -1.3;
  }, []);

  // Markers Colonias Britanicas en 1982
  const markers = [
    {
      lat: -51.742713,
      lng: -59.462019,
      label: "MALVINAS",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -54.365932,
      lng: -36.677381,
      label: "GEORGIAS",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -24.526053,
      lng: -127.332894,
      label: "PITCAIRN",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -37.285092,
      lng: -12.450978,
      label: "TRISTAN",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -15.996525,
      lng: -5.699665,
      label: "SANTA ELENA",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -7.958942,
      lng: -14.33348,
      label: "ASCENSIÓN",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -58.111003,
      lng: -26.705769,
      label: "SANDWICH",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: -7.3197777,
      lng: 72.448438,
      label: "TERRITORIO BRITÁNICO DEL OCEANO INDICO",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 35.014415,
      lng: 33.232272,
      label: "CHIPRE",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 36.131709,
      lng: -5.34627,
      label: "GIBRALTAR",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 32.368323,
      lng: -64.750985,
      label: "BERMUDAS",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 19.316351,
      lng: -81.244953,
      label: "ISLAS CAIMÁN",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 16.647306,
      lng: -62.314976,
      label: "MONTSERRAT",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 18.377808,
      lng: -62.773162,
      label: "ANGUILLA",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 18.510219,
      lng: -64.784033,
      label: "ISLAS VIRGENES",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 21.991488,
      lng: -71.779138,
      label: "ISLAS TURCAS",
      color: "red",
      orientation: "bottom",
    },
    {
      lat: 54.369952,
      lng: -2.045487,
      label: "REINO UNIDO",
      color: "white",
      orientation: "bottom",
    },
  ];

  return (
    <Globe
      ref={globeEl} // Nombre de referencia
      labelsData={markers} // Toma los puntos de la constante markers
      labelText="label" // Toma los nombres de los puntos del label en cada marker
      labelSize={0} // Tamaño del texto en los markers
      labelDotRadius={0.6} // Tamaño del punto en los markers}
      labelResolution={20} // Resolucion de render de los labels
      labelAltitude={0.01} // Altitud del marker
      labelColor="color" // Toma los colores de los puntos del label en caba marker
      labelDotOrientation="orientation" // Toma la posicion del texto de los puntos del label en cada marker
      animateIn={true} // Animación de entrada desactivada
      autoRotate={true} // Animacion de autorotacion activada
      showGraticules={false} // Mostrar la grilla sobre la luna desactivada
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg" // Textura de la luna
      backgroundColor="rgba(0,0,0,0)" // Color de fondo
      showAtmosphere={true} // Mostrar atmosfera activado
      atmosphereColor="gray" // Color de la atmosfera
      atmosphereAltitude={0} // Tamaño de la atmosfera
      rendererConfig={{ antialias: true, alpha: true }} // Configuracion del render
    />
  );
}
