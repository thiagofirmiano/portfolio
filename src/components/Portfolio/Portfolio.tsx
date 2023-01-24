import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import Carousel from "react-bootstrap/Carousel"; 
import { TextCarousel, TextTitulo } from "./Portfolio.styles";
import { Cards, DivCarousel, ImgCarousel, MainPortfolio } from "./Portfolio.styles";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from"../../assets/linkedin.svg";

export const Portfolio: React.FC = () => {
  return (
    <MainPortfolio>
      <TextTitulo id="portfolio">PORTFÓLIO</TextTitulo>
      <DivCarousel>
        <Cards>
          <Carousel indicators={false} controls={false}>
            <Carousel.Item interval={2500}>
              <ImgCarousel
                src={Facebook}
                alt="Coleção de Amigos"
              />
              <TextCarousel>
              </TextCarousel>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <ImgCarousel
                src={Twitter}
                alt="Comentários relevantes"
              />
              <TextCarousel>
              </TextCarousel>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <ImgCarousel
                src={Linkedin}
                alt="Instagram Social Mídia"
              />
              <TextCarousel>J
              </TextCarousel>
            </Carousel.Item>
          </Carousel>
        </Cards>
      </DivCarousel>
    </MainPortfolio>
  );
}