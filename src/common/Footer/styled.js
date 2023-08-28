import { styled } from "styled-components";
import cake from "../../images/cake.webp";

export const Wrapper = styled.div`
  display: flex;
  color: white;
  background-color: ${({ theme }) => theme.colors.pinkFlare};

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
  }
`;

export const StyledFooter = styled.footer`
  margin-top: 20px;
`;

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
  //text-align:center;
  //display:grid;
  //grid-template-columns:1fr 1fr ;
  
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

export const StyledMap = styled.iframe`
  border: 0;
  margin-top: 20px;
`;

export const Phone = styled.a`
  font-size: 30px;
  font-weight: 700;
  margin: 40px;
  text-decoration: none;
  color: white;
  font-family: "Zeyada", cursive;
`;
export const Name = styled.h2`
  padding: 0;
  font-family: "Zeyada", cursive;
  margin: 0;
  font-size: 40px;
  padding: 0;
  margin: 20px 0 0px;
  font-size: 40px;
`;
