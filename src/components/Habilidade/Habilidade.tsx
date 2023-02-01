import React from "react";
import { CardHabilidade, DivCards, Main, SubTituloCard, Text } from "./Habilidade.styles";


export const Habilidade: React.FC = () => {
  return (
    <Main>
      <Text id="competências">Competências</Text>

      <DivCards>
        <CardHabilidade>
          <SubTituloCard>---------------------------</SubTituloCard>
          <SubTituloCard>Desenvolvedor Front end</SubTituloCard>
          <SubTituloCard>---------------------------</SubTituloCard>
        </CardHabilidade>

        <CardHabilidade>
          <SubTituloCard>-------------------------</SubTituloCard>
          <SubTituloCard>Desenvolvedor Web</SubTituloCard>
          <SubTituloCard>-------------------------</SubTituloCard>
        </CardHabilidade>

        <CardHabilidade>
          <SubTituloCard>---------------------------</SubTituloCard>
          <SubTituloCard>JavaScript, Css, Html</SubTituloCard>
          <SubTituloCard>---------------------------</SubTituloCard>
        </CardHabilidade>

        <CardHabilidade>
          <SubTituloCard>---------------------------</SubTituloCard>
          <SubTituloCard>Análise de Requisitos</SubTituloCard>
          <SubTituloCard>---------------------------</SubTituloCard>
        </CardHabilidade>

        <CardHabilidade>
          <SubTituloCard>---------------------------</SubTituloCard>
          <SubTituloCard>Conhecimento Específico</SubTituloCard>
          <SubTituloCard>---------------------------</SubTituloCard>
        </CardHabilidade>
      </DivCards>
    </Main>
  );
}