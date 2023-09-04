import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin:20px auto;
  max-width:500px;
  background-color: #f5e1e1;
  border-radius:10px;
  padding:10px;
`

export const StyledImg = styled.img`
  width:100%;
`

export const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: 25px;
  text-align: center;

  @media(max-width:${({theme})=>theme.breakpoints.phoneMedia}px){
    font-size:20px;
  }
`;

export const StyledSubtitle = styled.h2`
 text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  margin:0;
  padding:0;
  @media(max-width:${({theme})=>theme.breakpoints.phoneMedia}px){
    font-size:15px;
  }
`

export const StyledParagraph = styled.p`
  padding: 0 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration:none;
  text-transform:uppercase;
  text-align:center;
  color:gray;
  margin:10px;
`
  