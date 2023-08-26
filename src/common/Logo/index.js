import { LogoContainer, LogoText, StyledLogo } from "./styled";
import logo from "../../images/logo.jpeg";
import logo_text from "../../images/logo_tekst.jpeg";

const Logo = () => (
  <LogoContainer>
    <StyledLogo src={logo} alt="Przesłodka logo" />
    <LogoText src={logo_text} alt="Przesłodka, pracownia tortów i deserów" />
  </LogoContainer>
);

export default Logo;
