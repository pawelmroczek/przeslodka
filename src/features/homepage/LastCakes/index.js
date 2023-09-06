import { useSelector } from "react-redux";
import TitleWithLines from "../../../common/TitleWithLines";
import { StyledButton, StyledNavLink } from "./styled";
import { GalleryContainer, StyledImg } from "./styled";
import { useEffect, useState } from "react";
import { selectCakes } from "../../cakeSlice";
import { scrollToTop } from "../../../common/scrollToTop";
const LastCakes = () => {
  const torty = useSelector(selectCakes);
  const [counter, setCounter] = useState(torty.length - 1);

  useEffect(() => {
    setCounter(torty.length - 1);
  }, [torty]);

  const increase = () => {
    if (counter <= torty.length - 2) {
      setCounter((counter) => counter + 1);
    }
  };

  const decreasae = () => {
    if (counter > 2) {
      setCounter((counter) => counter - 1);
    }
  };

  if (torty.length) {
    return (
      <>
        <TitleWithLines title={"ostatnie torty"} />
        <GalleryContainer>
          <StyledButton
            $left
            disabled={counter > torty.length - 2}
            onClick={increase}
          >
            &lt;
          </StyledButton>
          <StyledNavLink to={"/torty/torty/" + torty[counter].tytuł}>
            <StyledImg
              src={"https://www.new.przeslodka.pl/images/torty/" + torty[counter].plik}
            />
          </StyledNavLink>
          <StyledNavLink to={"/torty/torty/" + torty[counter - 1].tytuł}>
            <StyledImg
              src={"https://www.new.przeslodka.pl/images/torty/" + torty[counter - 1].plik}
            />
          </StyledNavLink>
          <StyledNavLink to={"/torty/torty/" + torty[counter - 2].tytuł}>
            <StyledImg
              src={"https://www.new.przeslodka.pl/images/torty/" + torty[counter - 2].plik}
            />
          </StyledNavLink>
          <StyledButton disabled={counter <= 2} onClick={decreasae}>
            &gt;
          </StyledButton>
        </GalleryContainer>
      </>
    );
  } else {
    return "";
  }
};

export default LastCakes;
