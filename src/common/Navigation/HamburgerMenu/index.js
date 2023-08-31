import { useState } from "react";
import { StyledIteam, StyledUl, Wrapper } from "./styled";
import { StyledLink, StyledNavLink } from "../styled";
import { FacebookIcon } from "../../Icons/FacebookIcon";
import { InstagramIcon } from "../../Icons/InstagramIcon";
import { TiktokIcon } from "../../Icons/TiktokIcon";
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
              <StyledLink>
                <StyledNavLink to={link.href}>{link.content}</StyledNavLink>
              </StyledLink>
            </StyledIteam>
          </li>
        ))}
        <StyledIteam>
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
