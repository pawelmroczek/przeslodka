import { Container, StyledImage, StyledNavLink, StyledParagraph, StyledTitle } from "./styled";
import { scrollToTop } from "../../../common/scrollToTop";

const toSweetTable = ({ id } = { id: ":id"}) => `/slodki-stol/${id}`;

const Tile = ({ title, image, paragraph, id }) => (
  <Container onClick={scrollToTop}>
    <StyledNavLink to={toSweetTable({id:id})}>
      <StyledImage src={image} alt={title} />
      <StyledTitle> {title}</StyledTitle>
      <StyledParagraph>{paragraph}</StyledParagraph>
    </StyledNavLink>
  </Container>
);

export default Tile;
