import { Container, StyledImage, StyledTitle } from "./styled";


const Tile = ({ title, image }) => (
  <Container>
    <StyledImage src={image} alt={title} />
    <StyledTitle> {title}</StyledTitle>
  </Container>
);

export default Tile;
