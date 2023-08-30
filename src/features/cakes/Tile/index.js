
import { Container, StyledImage, StyledParagraph, StyledTitle } from "./styled";


const Tile = ({ title, image, paragraph }) => (
  <Container>
    <StyledImage src={image} alt={title} />
    <StyledTitle> {title}</StyledTitle>
    <StyledParagraph>{paragraph}</StyledParagraph>
  </Container>
);

export default Tile;
