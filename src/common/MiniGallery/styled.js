import { styled } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledParagraph = styled.p`
  text-align: center;
  width: 70%;
  font-size: 20px;
  margin:0 0 10px 0;
  //font-weight:700;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size:17px;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  margin-bottom:30px;
`;

export const Container = styled.div`
  display: flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
  width: 80%;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;