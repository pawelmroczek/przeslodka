import { StyledLink, StyledNav, StyledNavLink, StyledUl, Wrapper } from "./styled";
import HamburgerMenu from "./HamburgerMenu";
import { BAZA } from "../../BAZA";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

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
          <StyledLink href="#kontakt">kontakt</StyledLink>
        </li>
      </StyledUl>
      <NavLink to="/"> {BAZA.strona.nawigacja.logo}</NavLink>
          
      <HamburgerMenu />
      <StyledUl>
        {linki.map((link) => (
          <li>
            <StyledLink><StyledNavLink to={link.href}>{link.content}</StyledNavLink></StyledLink>
          </li>
        ))}
      </StyledUl>
    </StyledNav>
  </Wrapper>
);

export default Navigation;
