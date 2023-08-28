import {
  LogoContainer,
  LogoText,
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledUl,
  Wrapper,
} from "./styled";
import HamburgerMenu from "./HamburgerMenu";
import { FacebookIcon } from "../Icons/FacebookIcon";
import { InstagramIcon } from "../Icons/InstagramIcon";
import { TiktokIcon } from "../Icons/TiktokIcon";
import Logo from "../Logo";
import { BAZA } from "../../BAZA";

const Navigation = ({ ikony, linki }) => (
  <Wrapper>
    <StyledNav>
      <StyledUl icons>
        {ikony.map((ikona) => (
          <li>
            <a href={ikona.href}>{ikona.content}</a>
          </li>
        ))}
        <li>
          <StyledLink>kontakt</StyledLink>
        </li>
      </StyledUl>
      {BAZA.strona.nawigacja.logo}
      <HamburgerMenu />
      <StyledUl>
        {linki.map((link) => (
          <li>
            <StyledLink>{link.content}</StyledLink>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  </Wrapper>
);

export default Navigation;
