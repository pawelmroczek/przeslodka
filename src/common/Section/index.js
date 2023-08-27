import TitleWithLines from "../TitleWithLines";
import { Line, StyledSection, StyledTitle, TitleContainer } from "./styled";

const Section = ({title,content}) =>(
  <StyledSection>
     <TitleWithLines title={title}/>
    {content}
  </StyledSection>
)

export default Section;