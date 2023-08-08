import { Container, StyledParagraph, StyledSection, StyledTitle } from "./styled";
import image from "../../images/IMG_8702.jpg"
import slodki from "../../images/ciastka14.jpg"
import babeczki from "../../images/babeczki1.jpg"

import Tile from "./Tile";
const MiniGallery = ({ title, text, content }) => (
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    <StyledParagraph>
      {text}
    </StyledParagraph>
    <Container>
      <Tile title={"Torty"} image={image}/>
      <Tile title={"Ciasta"} image={babeczki}/>
      <Tile title={"Słodki Stół"} image={slodki}/>
    </Container>
  </StyledSection>
);

export default MiniGallery;
