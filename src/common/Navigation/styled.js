import { css, styled } from "styled-components"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  color: white;
  padding: 10px;
`;

export const StyledNav = styled.nav`
  padding: 5px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    //align-items:flex-start;
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

  ${({ icons }) =>
    icons &&
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
export const StyledLink = styled.span`
  margin-right: 10px;
  &:hover {
    border-bottom: 1px white solid;
  }
`;
