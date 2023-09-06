import { useEffect } from "react"
import TitleWithLines from "../../common/TitleWithLines"
import Tile from "./Tile"
import { CakesContainer, Container } from "./styled"
import { useSelector } from "react-redux"
import { selectSweetTable } from "../cakeSlice"
import { scrollToTop } from "../../common/scrollToTop"

const SweetTable = ()=>{
  useEffect(()=>{
    scrollToTop()
    if(document.title!=="Torty Piaseczno i Warszawa"){
      document.title="Torty Piaseczno i Warszawa"
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Torty urodzinowe, komunijne, weselne z dowozem 602 351 865. Z motywem Wednesday i inne");
    }
  },[])

  const slodkosci=useSelector(selectSweetTable)

  return (
    <Container>
      <TitleWithLines header={1} title={"Nasza słodka oferta"}/>
      <CakesContainer>
        {slodkosci.map((tort) => (
          <Tile
            image={
              "https://www.new.przeslodka.pl/images/torty/" +
              tort.plik
            }
            title={tort.tytuł}
            paragraph={tort.opis}
            key={tort.tytuł}
            id={tort.tytuł}
          />
        ))}
      </CakesContainer>
    </Container>
  )
}

export default SweetTable