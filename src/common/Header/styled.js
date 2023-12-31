import { styled } from "styled-components";
import backgroundimg from "../../images/header-background.jpg";

export const FirstImg = styled.div`
 
  background-image: url(${backgroundimg});
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin-top:40px;
  }
`;

export const StyledHeader = styled.header`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    padding: 30px;
  }
`;

export const StyledText = styled.h1`
  color: white;
  margin: 0;
  font-size: 50px;
  font-weight: 800;
  text-transform: uppercase;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 30px;
  }
`;
