import {
  LogoContainer,
  LogoText,
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledUl,
  Wrapper,
} from "./styled";

import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { TiktokIcon } from "../Icons/TiktokIcon";
import Logo from "../Logo";

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
      <Logo/>
      <StyledUl>
        <li><StyledLink>torty</StyledLink></li>
        <li><StyledLink>słodki stół</StyledLink></li>
        <li><StyledLink>cennik</StyledLink></li>
      </StyledUl>
    </StyledNav>
  </Wrapper>
);

export default Navigation;
