import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
`;

export const Category = styled(NavLink)`
  background-color: lightgray;
  padding: 6px;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: lightskyblue;
  }
`;

export const CakesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const AllCakes = styled(Category)`
  &.active {
    background-color: lightgray;
  }
`;
