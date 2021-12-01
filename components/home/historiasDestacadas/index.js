import React from "react";
import Container from "./styled";
import Card from "../../home/card";
import { useAuthState, useAuthDispatch, setUser } from "@/contexts/AuthContext";
import { default as NextLink } from "next/link";

export default function HistoriasDestacadas({ dataCards }) {
  const { userAuth, userData } = useAuthState();
  return (
    <Container>
      <section>
        <div className="titleButtonsContainer">
          <h2>Conocé las historias</h2>
          <div className="gridButtons">
            <NextLink href="/crear">
                Nueva historia
            </NextLink>
          </div>
        </div>
        {dataCards.map((his) => {
          return (
            <Card
              title={his.titulo}
              date={his.fecha}
              abstract={his.descripcion}
              tag={his.categoria}
              fotohistoria={
                his && his.fotohistoria
                  ? his.fotohistoria
                  : "/assets/images/placeholder/profile.png"
              }
              user={his.usuario}
              slug={his.slug}
            />
          );
        })}
      </section>
    </Container>
  );
}
