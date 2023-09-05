import styled from "styled-components";

export const StyledTitle = styled.h2`
  color: black;
  font-weight: 400;
  margin: 0;

  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  border: 2px solid black;
  padding: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
`;

export const Line = styled.div`
  height: 2px;
  flex-grow: 1;
  background-color: gray;
`;
