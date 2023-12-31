import styled  from "styled-components";
import cake from "../../images/cake.webp";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Wrapper = styled.div`
  display: flex;
  color: white;
  background-color: ${({ theme }) => theme.colors.pinkFlare};

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
  }
`;

export const StyledListItem = styled.li`
  cursor: pointer;
`

export const LinksContainer = styled.div`
  background-image: url(${cake});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-size: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 100%;
    font-size: 17px;
  }
`;

export const StyledUl = styled.ul`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 30px;
`;

export const StyledLogo = styled.img`
  height: 80px;
  width: 80px;
`;

export const Container = styled.div`
  width: 50%;
  padding: 30px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    width: 100%;
  }
`;

export const Email = styled.a`
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  color: white;
`;

export const Phone = styled.a`
  font-size: 30px;
  font-weight: 700;
  margin: 40px;
  text-decoration: none;
  color: white;
`;
export const Name = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 20px;
  padding: 0;
  margin: 20px 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;

  &:hover{
    border-bottom:1px solid white;
  }
`;
export const StyledImg = styled.img`
  width: 80%;

  max-width:300px;
`;
