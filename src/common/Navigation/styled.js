import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  color:white;
  padding:10px;
`;

export const StyledNav = styled.nav`
  display:flex;
  align-items:center;
  justify-content:space-between;

`;

export const LogoContainer = styled.div`
  align-items:center;
  display:flex;
  justify-content:center;
`

export const StyledLogo = styled.img`
  height:80px;
  width:80px;
`
export const StyledUl = styled.ul`
  list-style:none;
  padding:0;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  width:25%;
  gap:10px;
  text-transform:uppercase;
  font-weight:500;
  font-size:20px;

  ${({ icons }) =>
    icons &&
    css`
      justify-content:flex-start;
    `}
`


export const StyledHeading = styled.span`
  padding-top:20px;
  font-family: 'Zeyada', cursive;
  margin-left:10px;
  font-size:40px;
`
