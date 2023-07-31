import { StyledHeader, StyledText } from "./styled";

const Header = ({text})=>(
  <StyledHeader>
    <StyledText>
      {text}
    </StyledText>
  </StyledHeader>
)

export default Header;