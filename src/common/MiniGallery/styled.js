import { styled } from "styled-components";
import test from "../../images/test.jpeg"

export const StyledTitle = styled.h2`
  color: black;
  font-weight: 400;
  margin: 10px 0 0 0 ;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  //border: 2px solid black;
  padding: 10px;
`;

export const StyledParagraph = styled.p`
  text-align: center;
  width: 70%;
  font-size: 20px;
  margin:0 0 10px 0;
  //font-weight:700;
  line-height: 140%;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image:url(${test});
  background-position:center;
  background-size:cover;
  padding:20px; */
`;

export const Container = styled.div`
  display: flex;
  justify-content:center;
  gap:10px;
  flex-wrap:wrap;
  width: 80%;
`;
