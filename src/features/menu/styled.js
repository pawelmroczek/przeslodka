import { styled } from "styled-components";

export const Container = styled.div`
  display:flex;

  @media(max-width:${({theme})=>theme.breakpoints.phoneMedia}px){
    flex-direction:column;
  }
`

export const StyledPage = styled.img`
  width:50%;

  @media(max-width:${({theme})=>theme.breakpoints.phoneMedia}px){
    width:100%;
  }
`