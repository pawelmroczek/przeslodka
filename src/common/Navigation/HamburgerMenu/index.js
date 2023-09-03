import { useState } from "react";
import { StyledIteam, StyledUl, Wrapper } from "./styled";
import { StyledLink, StyledNavLink } from "../styled";
import hamburgerIcon from "../../../images/hamburger-icon.png";

const HamburgerMenu = ({ ikony, linki }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <Wrapper>
      <img
        width="60px"
        height="60px"
        alt=""
        src={hamburgerIcon}
        onClick={() => {
          setHidden((hidden) => (hidden = !hidden));
        }}
      />
      <StyledUl hidden={hidden}>
        {linki.map((link) => (
          <li>
            <StyledIteam>
              {" "}
              <StyledLink
                onClick={() => {
                  setHidden((hidden) => (hidden = !hidden));
                }}
              >
                <StyledNavLink to={link.href}>{link.content}</StyledNavLink>
              </StyledLink>
            </StyledIteam>
          </li>
        ))}
        <StyledIteam  onClick={() => {
          setHidden((hidden) => (hidden = !hidden));
        }}>
          <StyledLink href="#kontakt">kontakt</StyledLink>
        </StyledIteam>
        {ikony.map((ikona) => (
          <StyledIteam icon>
            <a href={ikona.href}>{ikona.content}</a>
          </StyledIteam>
        ))}
      </StyledUl>
    </Wrapper>
  );
};

export default HamburgerMenu;
