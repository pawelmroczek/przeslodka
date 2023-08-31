import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Container, StyledImage, StyledNavLink, StyledParagraph, StyledTitle } from "./styled";

const toCake = ({ id,category } = { id: ":id", category: ":category" }) => `/torty/${category}/${id}`;

const Tile = ({ title, image, paragraph, id, category }) => (
  <Container>
    <StyledNavLink to={toCake({id:id ,category:category})}>
      <StyledImage src={image} alt={title} />
      <StyledTitle> {title}</StyledTitle>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledNavLink>
  </Container>
);

export default Tile;
