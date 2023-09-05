import { useSelector } from "react-redux";
import TitleWithLines from "../../../common/TitleWithLines";
import { ButtonContainer, StyledButton } from "./styled";
import { GalleryContainer, StyledImg } from "./styled";
import { useEffect, useState } from "react";
import { selectCakes } from "../../../cakeSlice";
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
          <StyledImg src={"/przeslodka/images/torty/" + torty[counter].plik} />
          <StyledImg
            src={"/przeslodka/images/torty/" + torty[counter - 1].plik}
          />
          <StyledImg
            src={"/przeslodka/images/torty/" + torty[counter - 2].plik}
          />
          <ButtonContainer>
            <StyledButton
              disabled={counter > torty.length - 2}
              onClick={increase}
            >
              &lt;
            </StyledButton>
            <StyledImg
              src={"/przeslodka/images/torty/" + torty[counter - 1].plik}
            />
            <StyledButton disabled={counter <= 2} onClick={decreasae}>
              &gt;
            </StyledButton>
          </ButtonContainer>
        </GalleryContainer>
      </>
    );
  } else {
    return "";
  }
};

export default LastCakes;
