import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  color: white;
  padding: 10px;
`;

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.pinkFlare};

  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    z-index: 1000; /* Dla warstwy nawigacji, aby była na wierzchu */
    position: fixed; /* Ustawienie nawigacji jako elementu z pozycją stałą */
    top: 0; /* Ustawienie nawigacji na górze ekranu */
    left: 0;
    right: 0;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled.img`
  height: 80px;
  width: 80px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 25%;
  gap: 10px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    display: none;
  }

  ${({ $icons }) =>
    $icons &&
    css`
      justify-content: flex-start;
      @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
        display: none;
      }
    `}

  ${({ hamburger }) =>
    hamburger &&
    css`
      display: none;
      @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
        margin-top: 60px;
        font-size: 30px;
        display: inline;
        position: absolute;
        text-align: left;
        width: auto;
        background-color: ${({ theme }) => theme.colors.pinkFlare};
      }
    `}
`;

export const StyledHeading = styled.h1`
  padding-top: 20px;
  font-family: "Zeyada", cursive;
  margin-left: 10px;
  font-size: 40px;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  margin-right: 10px;
  &:hover {
    border-bottom: 1px white solid;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover {
    border-bottom: 1px white solid;
  }
`;
