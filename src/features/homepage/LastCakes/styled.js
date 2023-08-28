import { styled } from "styled-components";

export const StyledTitle = styled.h2`
  color: black;
  font-weight: 400;
  margin: 10px 0 0 0;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 10px;
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
  font-size: 50px;
  color: darkgray;
  cursor: pointer;

  &:hover {
    color: black;
  }

  &:disabled {
    color: lightgray;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
`;

export const GalleryContainer = styled.div`
  padding-top: 2%;
  padding-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  width: 33.33%;
  padding-top: ${({ paddingTop }) => paddingTop}%;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}%;
`;
