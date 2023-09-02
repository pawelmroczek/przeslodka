import {
  Container,
  Email,
  LinksContainer,
  Name,
  Phone,
  StyledFooter,
  StyledMap,
  StyledNavLink,
  StyledUl,
  Wrapper,
} from "./styled";
import Logo from "../Logo";
import { BAZA } from "../../BAZA";
import { Component } from "react";
import { scrollToTop } from "../scrollToTop";



const Footer = () => (
  <StyledFooter id="kontakt">
    <Wrapper>
      <Container>
        <Logo />
        <Name>Kontakt Przesłodka Torty Piaseczno:</Name>
        <Phone href="602351865">Tel: 602-351-865</Phone>
        <br />
        <Email href="mailto:iza@przeslodka.pl">iza@przeslodka.pl</Email>
        <StyledMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.424073875238!2d20.98581557335757!3d52.06821111447787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192f236ae6ac59%3A0x1883ee3b00f7aaf0!2sPracownia%20tort%C3%B3w%20artystycznych%20Przes%C5%82odka!5e0!3m2!1spl!2spl!4v1693154169182!5m2!1spl!2spl"
          width="80%"
          height="250"
          allowfullscreen="1"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></StyledMap>
        <Name>Wskazówki dojazdu:</Name>
      </Container>
      <LinksContainer>
        <StyledUl>
          {BAZA.kategorie.map((kategoria) => (
            <li onClick={scrollToTop}><StyledNavLink to={"/torty/" + kategoria }>{kategoria}</StyledNavLink></li>
          ))}
        </StyledUl>
      </LinksContainer>
    </Wrapper>
  </StyledFooter>
);

export default Footer;
