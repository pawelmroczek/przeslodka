import { useState } from "react";
import { StyledIteam, StyledUl, Wrapper } from "./styled";
import { StyledLink } from "../styled";
import { FacebookIcon } from "../../Icons/FacebookIcon";
import { InstagramIcon } from "../../Icons/InstagramIcon";
import { TiktokIcon } from "../../Icons/TiktokIcon";
import hamburgerIcon from "../../../images/hamburger-icon.png"

const HamburgerMenu = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Wrapper>
      <img width="60px" height="60px" src={hamburgerIcon} onClick={()=>{setHidden(hidden=>hidden=!hidden)}}/>
      <StyledUl hidden={hidden}>
        <StyledIteam>
          <StyledLink>torty</StyledLink>
        </StyledIteam>
        <StyledIteam>
          <StyledLink>słodki stół</StyledLink>
        </StyledIteam>
        <StyledIteam>
          <StyledLink>cennik</StyledLink>
        </StyledIteam>
        <StyledIteam><StyledLink>kontakt</StyledLink></StyledIteam>
        <StyledIteam icon><a href="https://www.tiktok.com/@przeslodka_torty"><TiktokIcon/></a></StyledIteam>
        <StyledIteam icon>
         <a href="https://www.instagram.com/przeslodka_torty/"> <InstagramIcon /></a>
        </StyledIteam>
        <StyledIteam icon>
          <a href="https://www.facebook.com/przeslodkatorty"><FacebookIcon/></a>
        </StyledIteam>
        
      </StyledUl>
    </Wrapper>
  );
};

export default HamburgerMenu;
