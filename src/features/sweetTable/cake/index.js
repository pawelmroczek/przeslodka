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
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getSweetById } from "../../../cakeSlice";

const Pops = () => {
  const { id } = useParams();
  const cake = useSelector(state=>getSweetById(state,id))
  
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
      <StyledNavLink to={"/slodki-stol"}>Wróć do słodkości</StyledNavLink>
    </Container>
  );
};

export default Pops;
