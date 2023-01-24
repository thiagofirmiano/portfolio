import React from "react";
import { MContatos, Img, Main, Titulo } from "./Contatos.styles";
import IconLinkedin from "../../assets/linkedin.svg";
import IconFace from "../../assets/facebook.svg";
import IconTwitter from "../../assets/twitter.svg"; 

export const Contatos: React.FC = () => {

  return (
    <Main>
      <Titulo id="contato">CONTATOS</Titulo>
      <MContatos>
        <a href="https://www.linkedin.com/in/thiago-firmino-442650234/" target="_blank">
          <Img src={IconLinkedin}/>
        </a>
        <a href="https://github.com/thiagofirmiano" target="_blank">
          <Img src={IconFace}/>
        </a>
        <a href="https://wa.me/5585992367015" target="_blank">
          <Img src={IconTwitter}/>
        </a>
      </MContatos>
    </Main>
  );
}