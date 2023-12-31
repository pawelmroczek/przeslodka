import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5e1e1;
  
  box-shadow: 0px 2px 8px 0px rgba(186, 199, 213, 0.3);

 
`;

export const StyledImage = styled.img`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
  }
`;

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  text-align: center;
`;

