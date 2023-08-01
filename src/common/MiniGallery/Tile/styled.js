import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 1px solid black;
  background-color:#f5e1e1;
  //padding-bottom:10px;
  width: 30%;

  @media(max-width: ${({theme})=>theme.breakpoints.phoneMedia}px){
    width:80%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  @media(max-width: ${({theme})=>theme.breakpoints.phoneMedia}px){
  }
`;

export const StyledTitle = styled.h3`
  text-transform: uppercase;
  font-size: 15px;
  text-align:center;
  
`;
