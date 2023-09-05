import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5e1e1;
  width: 30%;
  box-shadow: 0px 2px 8px 0px rgba(186, 199, 213, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 80%;
  }
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
