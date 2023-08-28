import  styled  from "styled-components";

export const StyledParagraph = styled.p`
  margin: 0px auto;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.pinkFlare};
  padding: 40px;
 
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.3);
  font-size: 20px;
  //font-weight:700;
  line-height: 140%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    padding:10px;
    text-align:center;
    width:90%;
    font-size:17px;
  }
  `
