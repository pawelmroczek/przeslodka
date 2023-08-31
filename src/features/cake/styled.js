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

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration:none;
  text-transform:uppercase;
  text-align:center;
  color:gray;
  margin:10px;
`
  