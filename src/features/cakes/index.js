import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { BAZA } from "../../BAZA";
import TitleWithLines from "../../common/TitleWithLines";
import Tile from "./Tile";
import {
  AllCakes,
  CakesContainer,
  CategoriesContainer,
  Category,
} from "./styled";
import { useEffect } from "react";

const Cakes = () => {
  const location = useLocation();
  const category = location.pathname;
  const czesci = category.split('/');
  const title = czesci[2] ? czesci[2] : "torty"
  const torty = title === "torty" ? BAZA.torty.slice(0,20) : BAZA.torty.filter(tort => tort.kategorie.includes(title));
  
  useEffect(()=>{
    if(document.title!=="Torty Piaseczno i Warszawa"){
      document.title="Torty Piaseczno i Warszawa"
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "test");
    }
  },[])

  return (
    <>
      <CategoriesContainer>
        <AllCakes to={"/torty"} >ostatnie torty</AllCakes>
        {BAZA.kategorie.map((kategoria) => (
          <Category to={"/torty/" + kategoria}>{kategoria}</Category>
        ))}
      </CategoriesContainer>
      <TitleWithLines title={title} header={1}/>
      <CakesContainer>
        {torty.map((tort) => (
          <Tile
            image={
              "https://pawelmroczek.github.io/przeslodka/images/torty/" +
              tort.plik
            }
            title={tort.tytuł}
            paragraph={tort.opis}
            category={title}
            key={tort.tytuł}
            id={tort.tytuł}
          />
        ))}
      </CakesContainer>
    </>
  );
};
export default Cakes;
