import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    flex-direction: column;
    display: flex;
    align-items: flex-end;
  }
`;
export const StyledIteam = styled.li`
  margin: 20px;
  text-align: left;
  ${({ $icon }) =>
    $icon &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
        text-align: center;
      }
    `}
`;

export const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  gap: 10px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin-right: -16px;
    margin-top: 70px;
    font-size: 30px;
    display: inline;
    position: absolute;
    text-align: left;
    width: auto;
    background-color: ${({ theme }) => theme.colors.pinkFlare};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.3);
    border: solid white 1px;
    border-top: none;

    ${({ hidden }) =>
      hidden &&
      css`
        display: none;
      `}
  }
`;
