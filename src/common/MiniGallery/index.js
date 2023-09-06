import {
  Container,
  StyledNavLink,
  StyledParagraph,
  StyledSection,
} from "./styled";
import image from "../../images/IMG_8702.jpg";
import slodki from "../../images/ciastka14.jpg";
import babeczki from "../../images/babeczki1.jpg";

import Tile from "./Tile";
import TitleWithLines from "../TitleWithLines";
const MiniGallery = ({ title, text }) => (
  <StyledSection>
    <TitleWithLines title={title} />
    <StyledParagraph>{text}</StyledParagraph>
    <Container>
      <StyledNavLink to={"/torty"}>
        <Tile title={"Torty"} image={image} />
      </StyledNavLink>
      <StyledNavLink to={"/slodki-stol"}>
        <Tile title={"Słodki Stół"} image={slodki} />
      </StyledNavLink>
      <StyledNavLink to={"/slodki-stol"}>
        <Tile title={"Inne słodkości"} image={babeczki} />
      </StyledNavLink>
    </Container>
  </StyledSection>
);

export default MiniGallery;
