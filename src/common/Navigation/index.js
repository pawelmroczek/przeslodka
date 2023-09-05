import {
  StyledLink,
  StyledNav,
  StyledNavLink,
  StyledUl,
  Wrapper,
} from "./styled";
import HamburgerMenu from "./HamburgerMenu";
import { BAZA } from "../../BAZA";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { fetchCakes } from "../../features/cakeSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Navigation = ({ ikony, linki }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCakes());
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledNav>
        <StyledUl icons>
          {ikony.map((ikona) => (
            <li key={ikona.href}>
              <a href={ikona.href}>{ikona.content}</a>
            </li>
          ))}
          <li>
            <StyledLink href="#kontakt">kontakt</StyledLink>
          </li>
        </StyledUl>

        <NavLink to="/"> {BAZA.strona.nawigacja.logo}</NavLink>
        <HamburgerMenu ikony={ikony} linki={linki} />

        <StyledUl>
          {linki.map((link) => (
            <li key={link.href}>
              <StyledNavLink to={link.href}>{link.content}</StyledNavLink>
            </li>
          ))}
        </StyledUl>
      </StyledNav>
    </Wrapper>
  );
};

export default Navigation;
