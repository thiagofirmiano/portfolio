import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel";
import { TextCarousel, TextTitulo } from "../Portfolio/Portfolio.styles";
import { Cards, DivCarousel, ImgCarousel, MainPortfolio } from "./Portfolio.styles";
import Linkedin from "../../assets/linkedin.svg";
import Facebook from "../../assets/facebook.svg";
import Whatsapp from "../../assets/phone.svg";

export const Portfolio: React.FC = () => {
  return (
    <MainPortfolio>
      <TextTitulo id="portfolio">LOCAL ONDE DIVULGO MINHAS EXPERÊNCIAS!</TextTitulo>
      <DivCarousel>
        <Cards>
          <Carousel indicators={false} controls={false}> 
            <Carousel.Item interval={500}>
              <ImgCarousel
                src={Linkedin}
                alt="Informações do Linkdin"
              />
              <TextCarousel> O LinkedIn é a maior rede social profissional que existe. 
                Assim como as outras mídias sociais – Facebook, por exemplo – também possibilita interação. 
                O diferencial é que, nessa rede social, essas interações podem influenciar a carreira, positiva e negativamente.
              </TextCarousel>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <ImgCarousel
                src={Facebook}
                alt="Informações do Facebook "
              />
              <TextCarousel>É uma rede social que conecta usuários em todo o mundo. Por meio de perfis — pessoais e profissionais —, 
                é possível encontrar e conhecer pessoas, acompanhar personalidades públicas e marcas, criar,
                consumir e compartilhar conteúdos e muito mais.
              </TextCarousel>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <ImgCarousel
                src={Whatsapp}
                alt="Informações do Whatsapp"
              />
              <TextCarousel>O WhatsApp Messenger ou simplesmente WhatsApp (é ainda conhecido por “zapp” no Brasil)
                 é uma aplicação de mensagens instantâneas para smartphones que permite comunicar com os seus contactos,
                 através de mensagens escritas, mensagens de voz, ou ainda através de telefonemas.
              </TextCarousel>
            </Carousel.Item>  
          </Carousel>
        </Cards>
      </DivCarousel>
    </MainPortfolio>
  );
}