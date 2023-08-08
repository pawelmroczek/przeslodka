import {
  Container,
  Line,
  StyledParagraph,
  StyledSection,
  StyledTitle,
  TitleContainer,
} from "./styled";

const VerticalSection = ({ title, text }) => (
  <StyledSection>
    <Container>
      <TitleContainer>
        <Line />
        <StyledTitle>{title}</StyledTitle>
        <Line />
      </TitleContainer>
      <StyledParagraph>{text}</StyledParagraph>
    </Container>
  </StyledSection>
);

export default VerticalSection;
