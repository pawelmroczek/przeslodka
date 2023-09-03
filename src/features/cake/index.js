import {
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import {
  Container,
  StyledImg,
  StyledNavLink,
  StyledParagraph,
  StyledSubtitle,
  StyledTitle,
} from "./styled";
import { BAZA } from "../../BAZA";
import { useEffect } from "react";

const Cake = () => {
  const { id } = useParams();
  const location = useLocation();
  const cake = BAZA.torty.find((tort) => tort.tytuł === id);
  const czesci = location.pathname.split("/");
  const back =
    czesci[2] === "torty" ? "/torty" : "/" + czesci[1] + "/" + czesci[2];

  useEffect(() => {
    document.title = cake.metaTITLE;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", cake.metaDESC);
    }
  }, [cake.metaDESC, cake.metaTITLE]);

  return (
    <Container>
      <StyledImg
        src={
          "https://pawelmroczek.github.io/przeslodka/images/torty/" + cake.plik
        }
      />
      <div>
        <StyledTitle>{cake.tytuł}</StyledTitle>
        <StyledParagraph>{cake.opis}</StyledParagraph>
        <StyledSubtitle>{cake.podtytuł1}</StyledSubtitle>
        <StyledParagraph>{cake.dodatkowyOpis1}</StyledParagraph>
        <StyledSubtitle>{cake.podtytuł2}</StyledSubtitle>
        <StyledParagraph>{cake.dodatkowyOpis2}</StyledParagraph>
      </div>
      <StyledNavLink to={back}>Wróć do tortów</StyledNavLink>
    </Container>
  );
};

export default Cake;
