import {
  Icon,
  LogoContainer,
  StyledHeading,
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledUl,
  Wrapper,
} from "./styled";
import logo from "../../images/logo.jpeg";
import facebookLogo from "../../images/facebook-icon.svg";
import { FacebookIcon } from "./Icons/FacebookIcon";
import { InstagramIcon } from "./Icons/InstagramIcon";
import { TiktokIcon } from "./Icons/TiktokIcon";

const Navigation = () => (
  <Wrapper>
    <StyledNav>
      <StyledUl icons>
        <li><a href="https://www.tiktok.com/@przeslodka_torty"><TiktokIcon/></a></li>
        <li>
         <a href="https://www.instagram.com/przeslodka_torty/"> <InstagramIcon /></a>
        </li>
        <li>
          <a href="https://www.facebook.com/przeslodkatorty"><FacebookIcon/></a>
        </li>
        <li><StyledLink>kontakt</StyledLink></li>
      </StyledUl>
      <LogoContainer>
        <StyledLogo src={logo} alt="Przesłodka logo" />
        <StyledHeading>Przesłodka</StyledHeading>
      </LogoContainer>
      <StyledUl>
        <li><StyledLink>torty</StyledLink></li>
        <li><StyledLink>wypieki</StyledLink></li>
        <li><StyledLink>cennik</StyledLink></li>
      </StyledUl>
    </StyledNav>
  </Wrapper>
);

export default Navigation;
