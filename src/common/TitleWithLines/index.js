import { Line, StyledTitle, TitleContainer } from "./styled";

const TitleWithLines = ({title, header}) => (
  <TitleContainer>
      <Line/>
      {header ? <StyledTitle as={"h1"}>{title}</StyledTitle> : <StyledTitle>{title}</StyledTitle>}
      <Line/>
  </TitleContainer>
);

export default TitleWithLines
