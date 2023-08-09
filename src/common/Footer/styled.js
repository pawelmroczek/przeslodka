import { styled } from "styled-components";
import cake from "../../images/cake.webp";

export const Wrapper = styled.div`
  display: flex;
  color: white;
`;

export const StyledFooter = styled.footer``;

export const BackgroundImg = styled.div`
  background-image: url(${cake});
  background-position: center;
  background-size: cover;
  width: 50%;
`;

export const Info = styled.div`
  background-color: black;
  color: white;
  font-size:20px;
  padding:15px;
`;

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    order: -1;
  }
`;

export const StyledHeading = styled.h1`
  padding-top: 20px;
  font-family: "Zeyada", cursive;
  margin-left: 10px;
  font-size: 40px;
`;

export const StyledLogo = styled.img`
  height: 80px;
  width: 80px;
`;

export const Container = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  padding:30px;
  text-align:center;
`;

export const Email = styled.a`
  font-size:40px;
  font-weight:700;
  margin:40px;
  text-decoration:none;
  color:white;
`;

export const Phone = styled.a`
  font-size:30px;
  font-weight:700;
  margin:40px;
  text-decoration:none;
  color:white;
`
export const Name = styled(StyledHeading)`
  padding:0;
  margin:0;
  font-size:60px;
`