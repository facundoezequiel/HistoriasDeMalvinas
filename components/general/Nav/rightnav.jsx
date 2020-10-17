import React, { useEffect } from "react";
import styled from 'styled-components';
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import { default as NextLink } from "next/link";

const RightNavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;

  a {
    margin: 0px 0px 0px 13px;
    text-decoration: none;
    color: var(--black);
    font-size: 0.77em;
    font-family: var(--poppins);
    font-weight: 400;
    transition: 0.2s ease 0s;
    position: relative;
  }

  a::after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--black);
    content: "";
    opacity: 0;
    transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
    transform: translateY(19.5px);
    cursor: default;
  }

  a:hover {
    color: var(--black);
    cursor: pointer !important;
  }

  a:hover:after {
    opacity: 1;
    transform: translateY(19.5px);
    background-color: var(--black);
  }

  .navBar > .active:after {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 3px;
    background-color: var(--orange) !important;
    content: "";
    opacity: 1;
    transform: translateY(19.5px);
    cursor: default;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    backdrop-filter: saturate(180%) blur(10px);
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 8.5rem;
    transition: transform 0.3s ease-in-out;

    a {
      text-align: center;
      padding: 35px 0px 0px 0px;
      margin: 0 auto;
      text-decoration: none;
      color: var(--black);
      font-size: 1.77em;
      font-family: var(--poppins);
      font-weight: 400;
      transition: 0.2s ease 0s;
      position: relative;
    }

    a:hover {
      color: var(--black);
      font-weight: 800;
      transform: scale(1.1);
    }

    a:hover:after {
      opacity: 0;
    }

  }
`;

const RightNav = ({ open }) => {
  let scrollSpy = Scroll.scrollSpy;
  useEffect(() => {
    scrollSpy.update();
  });
  return (
    <RightNavContainer open={open} className="navBar">
          <Link
            activeClass="active"
            to="home"
            smooth={true}
            spy={true}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            activeClass="active"
            to="historias"
            smooth={true}
            spy={true}
            duration={500}
          >
            Historias
          </Link>
          <Link
            activeClass="active"
            to="proyecto"
            smooth={true}
            spy={true}
            duration={500}
            offset={-50}
          >
            Proyecto
          </Link>
          <Link
            activeClass="active"
            to="comunidad"
            smooth={true}
            spy={true}
            duration={500}
          >
            Comunidad
          </Link>
          <Link
            activeClass="active"
            to="donar"
            smooth={true}
            spy={true}
            duration={500}
          >
            Donar
          </Link>
          <Link
            activeClass="active"
            to="contacto"
            smooth={true}
            s
            spy={true}
            duration={500}
          >
            Contacto
          </Link>
    </RightNavContainer>
  )
}

export default RightNav