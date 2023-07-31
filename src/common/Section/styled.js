import { styled } from "styled-components";

export const StyledSection = styled.section`
  color: white;
  border-top: 1px solid white;
  padding-top: 25px;
`;

export const StyledTitle = styled.h2`
  color: black;
  font-weight:400;
  margin: 0;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  border: 2px solid black;
  padding:10px;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  //gap:10px;
  align-items:center;
`

export const Line = styled.div`
  height:2px;
  flex-grow:1;
  background-color:gray;
`