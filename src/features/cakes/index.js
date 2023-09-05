import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import TitleWithLines from "../../common/TitleWithLines";
import Tile from "./Tile";
import {
  AllCakes,
  CakesContainer,
  CategoriesContainer,
  Category,
} from "./styled";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getCakesByCategory,
  selectCakes,
  selectCategories,
} from "../cakeSlice";

const Cakes = () => {
  const location = useLocation();
  const category = location.pathname;
  const czesci = category.split("/");
  const title = czesci[2] ? czesci[2] : "torty";
  const allCakes = useSelector(selectCakes);
  const filtered = useSelector((state) => getCakesByCategory(state, title));
  const torty = title === "torty" ? allCakes.slice(0, 20) : filtered;

  useEffect(() => {
    if (document.title !== "Torty Piaseczno i Warszawa") {
      document.title = "Torty Piaseczno i Warszawa";
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Torty urodzinowe, komunijne, weselne z dowozem 602 351 865. Z motywem Wednesday i inne");
    }
  }, []);

  const categories = useSelector(selectCategories);

  return (
    <>
      <CategoriesContainer>
        <AllCakes to={"/torty"}>ostatnie torty</AllCakes>
        {categories.map((kategoria) => (
          <Category to={"/torty/" + kategoria}>{kategoria}</Category>
        ))}
      </CategoriesContainer>
      <TitleWithLines title={title} header={1} />
      <CakesContainer>
        {torty.map((tort) => (
          <Tile
            image={
              "/przeslodka/images/torty/" +
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
