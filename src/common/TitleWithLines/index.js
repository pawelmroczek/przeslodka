import { Line, StyledTitle, TitleContainer } from "./styled";

const TitleWithLines = ({title}) => (
  <TitleContainer>
      <Line/>
      <StyledTitle>{title}</StyledTitle>
      <Line/>
  </TitleContainer>
);

export default TitleWithLines
