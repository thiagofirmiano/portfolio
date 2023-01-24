import React from "react";
import { Main, Sub, Text } from "./Painel.styles";


export const Painel: React.FC = () => {
  return (
    <Main>
      <Text>
        <Text>FREELANCER</Text>
        <Text>UI/UX DESIGN</Text>
        <Text>DEV FRONT-END</Text>
        <Text>DESENVOLVIMENTO WEB</Text>
        <Sub>Sites completos e personalizados</Sub>
      </Text>
    </Main>
  );
} 