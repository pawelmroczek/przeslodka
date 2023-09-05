import { Container, StyledParagraph, StyledSection } from "./styled";
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
      <Tile title={"Torty"} image={image} />
      <Tile title={"Słodki Stół"} image={slodki} />
      <Tile title={"Inne słodkości"} image={babeczki} />
    </Container>
  </StyledSection>
);

export default MiniGallery;
