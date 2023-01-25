import React from "react";
import { MContatos, Img, Main, Titulo } from "./Contatos.styles";
import IconLinkedin from "../../assets/linkedin.svg";
import IconFacebook from "../../assets/facebook.svg";
import IconWhatsapp from "../../assets/phone.svg";


export const Contatos: React.FC = () => { 
  return (
    <Main>
      <Titulo id="contato">CONTATOS</Titulo>
      <MContatos>
        <a href="https://www.linkedin.com/in/thiago-firmiano/" target="_blank">
          <Img src={IconLinkedin}/>
        </a>
        <a href="https://github.com/thiagofirmiano" target="_blank">
          <Img src={IconFacebook}/>
        </a>
        <a href="https://wa.me/5585992367015" target="_blank">
          <Img src={IconWhatsapp}/>
        </a>
      </MContatos>
    </Main>
  );
}