import React from "react";
import {  MHeader, Bar, Link } from "./Header.styles";


export const Header: React.FC = () => (
  <MHeader>
    <Bar>
      <Link><a href="#competências">Competências</a></Link>
      <Link><a href="#portfolio">Local onde divulgo minhas experiências</a></Link>
      <Link><a href="#contato">Contatos</a></Link>
    </Bar>
  </MHeader>
);