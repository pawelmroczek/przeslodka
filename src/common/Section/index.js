import TitleWithLines from "../TitleWithLines";
import { StyledSection } from "./styled";

const Section = ({title,content}) =>(
  <StyledSection>
     <TitleWithLines title={title}/>
    {content}
  </StyledSection>
)

export default Section;