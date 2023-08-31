import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Container, StyledImg, StyledNavLink, StyledParagraph, StyledTitle } from "./styled";
import { BAZA } from "../../BAZA";

const Cake = () => {
  const { id } = useParams()
  const location = useLocation()
  const cake = BAZA.torty.find((tort) => tort.id === id);
  const czesci = location.pathname.split('/');
  const back =czesci[2]==="torty" ? "/torty" : "/" + czesci[1]+ "/" +czesci[2]
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
        
      </div>
      <StyledNavLink to={back}>Wróć do tortów</StyledNavLink>
    </Container>
  );
};

export default Cake;
