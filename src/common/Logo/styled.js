import { styled } from "styled-components";

export const LogoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    order: -1;
  }
`;

export const StyledLogo = styled.img`
  height: 80px;
  width: 80px;
`;

export const LogoText = styled.img`
 width: 200px;
`