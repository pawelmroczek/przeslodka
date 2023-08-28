import { BAZA } from "../../../BAZA";
import { ButtonContainer, StyledButton, StyledTitle } from "./styled";
import { GalleryContainer, StyledImg, InfoDiv } from "./styled";
import { useState } from "react";
const LastCakes = () => {
  const [counter, setCounter] = useState(BAZA.torty.length-1);

  const increase = () => {
    if (counter <= BAZA.torty.length-2) {
      setCounter((counter => counter + 1));
    }
  };

  const decreasae = () => {
    if(counter>2){
      setCounter((counter => counter - 1));
    }
  };

  return (
    <>
      <StyledTitle>/ ostatnie torty</StyledTitle>
      <GalleryContainer>
        <StyledImg
          src={"przeslodka/images/torty/" + BAZA.torty[counter].plik}
        />
        <StyledImg
          src={"przeslodka/images/torty/" + BAZA.torty[counter -1].plik}
        />
        <StyledImg
          src={"przeslodka/images/torty/" + BAZA.torty[counter-2].plik}
        />
      </GalleryContainer>
      <ButtonContainer>
        <StyledButton disabled={counter > BAZA.torty.length-2} onClick={increase}>&lt;-</StyledButton>
        <StyledButton disabled={counter<=2} onClick={decreasae}>-&gt;</StyledButton>
      </ButtonContainer>
    </>
  );
};

export default LastCakes;
