import { FirstImg, StyledHeader, StyledText } from "./styled";

const Header = ({ text }) => (
  <FirstImg>
    <StyledHeader>
      <StyledText>{text}</StyledText>
    </StyledHeader>
  </FirstImg>
);

export default Header;
