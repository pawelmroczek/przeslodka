import { Container, StyledParagraph, StyledSection, StyledTitle } from "./styled";
import image from "../../images/IMG_8702.jpg"
import Tile from "./Tile";
const MiniGallery = ({ title, text, content }) => (
  <StyledSection>
    <StyledTitle>{title}</StyledTitle>
    <StyledParagraph>
      {text}
    </StyledParagraph>
    <Container>
      <Tile title={"Torty"} image={image}/>
      <Tile title={"Ciasta"} image={image}/>
      <Tile title={"Chleby i bułki"} image={image}/>
    </Container>
  </StyledSection>
);

export default MiniGallery;
