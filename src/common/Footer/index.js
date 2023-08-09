import {
  BackgroundImg,
  Container,
  Email,
  Info,
  LogoContainer,
  Name,
  Phone,
  StyledFooter,
  StyledHeading,
  StyledLogo,
  Wrapper,
} from "./styled";
import logo from "../../images/logo.jpeg";


const Footer = () => (
  <StyledFooter>
    <Info>
    Terminy realizacji ok. 3-4 dni.
    </Info>
    <Wrapper>
    <Container>
      <LogoContainer>
        <StyledLogo src={logo} alt="Przesłodka logo" />
        <StyledHeading>Przesłodka</StyledHeading>
       
       
      </LogoContainer>
      <Name>Izabela Mroczek</Name><br/>
      <Email href="mailto:iza@przeslodka.pl">iza@przeslodka.pl</Email><br/>
      <Phone href="602351865">Tel: 602-351-865</Phone>
    </Container>
    <BackgroundImg/>
  </Wrapper>
  </StyledFooter>
);

export default Footer;
