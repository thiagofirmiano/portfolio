import React from "react";
import {  MHeader, Bar, Link } from "./Header.styles";


export const Header: React.FC = () => (
  <MHeader>
    <Bar>
      <Link><a href="#portfolio">Portfólio</a></Link>
      <Link><a href="#contato">Contato</a></Link> 
    </Bar>
  </MHeader>
);