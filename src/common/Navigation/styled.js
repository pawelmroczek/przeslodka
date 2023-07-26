import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  color: white;
  padding: 10px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    order: -1;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
  }

  ${({ icons }) =>
    icons &&
    css`
      justify-content: flex-start;
      @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
        flex-direction: row;
        justify-content:center;
        flex-wrap:wrap-reverse;
        width:30%;
        order:1;
        gap:15px;
      }
    `}

  
`;

export const StyledHeading = styled.span`
  padding-top: 20px;
  font-family: "Zeyada", cursive;
  margin-left: 10px;
  font-size: 40px;
`;
export const StyledLink = styled.span`
  margin-right:10px;

  &:hover {
    border-bottom: 1px white solid;
  }
`;
