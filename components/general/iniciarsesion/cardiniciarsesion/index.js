import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardIniciarSesionContainer } from "./styled";
import Tippy from "@tippyjs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { default as NextLink } from "next/link";
import { auth } from "@/lib/firebase";
import {
  setUserCookie,
  removeUserCookie,
  getUserFromCookie,
} from "@/lib/userCookies";
import { mapUserData } from "@/lib/mapUserData";
import { useRouter } from "next/router";
import Color from "color-js";

export default function CardInciarSesion() {
  const router = useRouter();

  // User state retorna un array con dos posiciones, la primera el valor del estado y la segunda un funcion que setea el estado
  // Incia el estado cuando el componente se termino de renderizar, con valores iniciales desde un objeto con dos propiedades nulas en principio
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    // Si fuese de registro tendria mas info
  });

  // Registro: Haria la funcion async que paso gonza por slack y le paso todas las propiedades tengo que importar axios
  // await axios.post('/api/auth/register', {email: fromValue.emial , password: 'bla bla'});

  const handleChange = (key, value) => {
    setFormValue({
      ...formValue,
      [key]: value,
    });
  };

  // Recibe el mail y la contraseña que le estoy pasando e inica sesion con esos datos
  // Registro seria la funcion signUp adentro antes de los parentesis tendria un async y dentro pongo la funcion de acios
  const login = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        router.push("/inicio");
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cambiar por la funcion que corresponda
    login({ email: formValue.email, password: formValue.password });
  };

  // Guarda el token en las cookies
  // Esto registro no lo usa
  const onAuthStateChange = () => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = mapUserData(user);
        setUserCookie(userData);

        // console.log(getUserFromCookie());
      } else {
        removeUserCookie();
      }
    });
  };

  // Esto registro no lo usa
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => {
      unsubscribe();
    };
  }, []);

  // Tooltip Lectura Button
  const TooltipLectura = styled(Tippy)`
    background: white;
    color: gray;
    border: 1px solid #e1e6f9;
    font-family: var(--inter);
    font-size: 0.75em;
    font-weight: 400;
    text-align: center;
  `;

  return (
    <CardIniciarSesionContainer>
      {/* Left Container */}
      <section id="leftContainer">
        {/* Data Container */}
        <div id="dataLeftContainer">
          {/* Logos */}
          <div id="logosLeftContainer">
            <img
              src="./assets/logos/LogoHistoriasAzul.svg"
              alt="Logo Historias de Malvinas"
              draggable="false"
            />
            <img
              src="./assets/logos/IsologoDedicadoNegro.svg"
              alt="Paz, Memoria y Justicia"
              draggable="false"
              id="dedicatedLogo"
            />
          </div>
          {/* Title */}
          <h3>Bienvenidx</h3>
          {/* Text */}
          <p>
            Por favor, complete los datos para poder inciar sesión
            <br />
            <br />
            <span>
              Si acaba de registrarse, valide su identidad mediante el correo
              que le fue enviado para poder inicar sesión.
            </span>
          </p>
          {/* Login form */}
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => handleChange("email", e.target.value)}
              value={formValue.email}
              oninput="validity.valid || (value='');"
            />
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => handleChange("password", e.target.value)}
              value={formValue.password}
            />
            <div id="buttonsContainer">
              <button type="submit" id="submitButton">
                Iniciar Sesión
              </button>
              {/* <button id="facebookButton">Entrar con Facebook</button> */}
              <TooltipLectura
                content="Solo podrá leer historias"
                arrow={false}
                placement="bottom"
              >
                <button id="lectorButton">
                  <NextLink href="/inicio">
                    <a>Entrar como lector</a>
                  </NextLink>
                </button>
              </TooltipLectura>
            </div>
          </form>
          <p id="registerText">
            ¿No tenes una cuenta?{" "}
            <NextLink href="/register">
              <a>Registrate acá</a>
            </NextLink>
          </p>
        </div>
      </section>

      {/* Right Container */}
      <section id="rightContainer">
        {/* Data Container */}
        <div id="dataRightContainer">
          <p>
            <strong>Al usuario:</strong>
            <br />
            <br />
            Historias de Malvinas, es un proyecto universitario y{" "}
            <span>sin finas de lucro</span> realizado por{" "}
            <span>Facundo Brahim</span> estudiante Lic. en Tecnología
            Multimedial de la Univ. Maimónides.
            <br />
            <br />
            Se busca crear una repositorio web participativo de historias sobre
            la <span>Guerra de Malvinas</span> y temas relacionados con la
            participación de excombatientes y/o familiares de los mismos/caidos.
            <br />
            <br />
            Así lograr una <span>nueva forma de reclamo</span> a traves de
            herramientas digitales ante la usurpación colonial e ilegal por
            parte Reino Unido en las Islas Malvinas e Islas del Atlántico Sur.
          </p>
          {/* Signature 
          <img
            src="./assets/logos/Firma.svg"
            alt="Facundo Brahim firma"
            draggable="false"
            id="signature"
          /> */}
        </div>
      </section>
    </CardIniciarSesionContainer>
  );
}
