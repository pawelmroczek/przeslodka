import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled ,{ css } from "styled-components";

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
  font-size: 70px;
  color: black;
  cursor: pointer;
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 3;
  &:hover {
    color: black;
  }

  ${({ $left }) =>
    $left &&
    css`
      right: inherit;
      left: 0;
    `}

  &:disabled {
    color: lightgray;
  }
`;

export const GalleryContainer = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const StyledImg = styled.img`
  z-index: -1;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  width: 33.33%;
`;
