import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  Container,
  StyledImg,
  StyledNavLink,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSweetById } from "../../cakeSlice";
import { scrollToTop } from "../../../common/scrollToTop";

const Pops = () => {
  const { id } = useParams();
  const pop = useSelector((state) => getSweetById(state, id));

  useEffect(() => {
    scrollToTop()
    document.title = pop.metaTITLE;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pop.metaDESC);
    }
  }, [pop.metaDESC, pop.metaTITLE]);

  return (
    <Container>
      <StyledImg
        src={
          "https://pawelmroczek.github.io/przeslodka/images/torty/" + pop.plik
        }
      />
      <div>
        <StyledTitle>{pop.tytuł}</StyledTitle>
        <StyledParagraph>{pop.opis}</StyledParagraph>
        <StyledSubtitle>{pop.podtytuł1}</StyledSubtitle>
        <StyledParagraph>{pop.dodatkowyOpis1}</StyledParagraph>
        <StyledSubtitle>{pop.podtytuł2}</StyledSubtitle>
        <StyledParagraph>{pop.dodatkowyOpis2}</StyledParagraph>
      </div>
      <StyledNavLink to={"/slodki-stol"}>Wróć do słodkości</StyledNavLink>
    </Container>
  );
};

export default Pops;
