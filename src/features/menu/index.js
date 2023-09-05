import { Container, StyledPage } from "./styled";
import Menu1 from "../../images/menu1.png";
import Menu2 from "../../images/menu2.png";
import { useEffect } from "react";

const Menu = () => {

  useEffect(()=>{
    if(document.title!=="Torty Piaseczno i Warszawa"){
      document.title="Torty Piaseczno i Warszawa"
    }
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content","Torty urodzinowe, komunijne, weselne z dowozem 602 351 865. Z motywem Wednesday i inne");
    }
  },[])

  return (
    <Container>
      <StyledPage src={Menu1} />
      <StyledPage src={Menu2} />
    </Container>
  );
};

export default Menu;
