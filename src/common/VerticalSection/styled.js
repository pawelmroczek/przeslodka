import  styled  from "styled-components";
import image from "../../images/test.jpeg"

export const StyledSection = styled.section`
  margin-top:25px;
  display: flex;
  justify-content:center;
  width:100%;
  padding:20px;
  background-image:url(${image});
  background-position:center;
  background-size:cover;
  color:white;
`;

export const StyledParagraph= styled.p`
  padding: 40px;
  font-size: 20px;
  //font-weight:700;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    padding:10px;
  }
`

export const StyledTitle = styled.h2`
  color: white;
  font-weight:400;
  margin: 0;
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;
  border: 2px solid white;
  padding:10px;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  align-items:center;
  margin-bottom:20px;
`

export const Line = styled.div`
  height:2px;
  flex-grow:1;
  background-color:lightgray;
`
export const Container = styled.div`
  background-color: rgb(0,0,0, 0.6);
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.3);
  padding:20px;
  width:80%;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    padding:10px;
    text-align:center;
    width:90%;
  }
`