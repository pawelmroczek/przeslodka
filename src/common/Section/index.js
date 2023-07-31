import { Line, StyledSection, StyledTitle, TitleContainer } from "./styled";

const Section = ({title,content}) =>(
  <StyledSection>
     <TitleContainer>
      <Line/>
      <StyledTitle>{title}</StyledTitle>
      <Line/>
    </TitleContainer>
    {content}
  </StyledSection>
)

export default Section;