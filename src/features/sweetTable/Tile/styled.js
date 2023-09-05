import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5e1e1;
  width: 200px;
  box-shadow: 0px 2px 8px 0px rgba(186, 199, 213, 0.3);
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 80%;
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;

export const StyledParagraph = styled.p`
  padding: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
