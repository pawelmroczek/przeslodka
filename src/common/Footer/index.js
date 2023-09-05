import {
  Container,
  Email,
  LinksContainer,
  Name,
  Phone,
  StyledImg,
  StyledNavLink,
  StyledUl,
  Wrapper,
} from "./styled";
import Logo from "../Logo";
import { scrollToTop } from "../scrollToTop";
import { useSelector } from "react-redux";
import { selectCategories } from "../../features/cakeSlice";
import Map from "./Map";
import dojazd from "../../images/dojazd.jpg";

const Footer = () => {
  const categories = useSelector(selectCategories);

  return (
    <footer id="kontakt">
      <Wrapper>
        <Container>
          <Logo />
          <Name>Przesłodka Torty Piaseczno:</Name>
          <Phone href="602351865">Tel: 602-351-865</Phone>
          <br />
          <Email href="mailto:iza@przeslodka.pl">iza@przeslodka.pl</Email>
          <Map />
          <Name>Wskazówki dojazdu:</Name>
          <StyledImg src={dojazd} />
        </Container>
        <LinksContainer>
          <StyledUl>
            {categories.map((kategoria) => (
              <li onClick={scrollToTop}>
                <StyledNavLink to={"/torty/" + kategoria}>
                  {kategoria}
                </StyledNavLink>
              </li>
            ))}
          </StyledUl>
        </LinksContainer>
      </Wrapper>
    </footer>
  );
};

export default Footer;
