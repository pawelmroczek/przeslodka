import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme";
import Navigation from "./common/Navigation";
import Header from "./common/Header";
import HeaderText from "./features/homepage/HeaderText";
import Section from "./common/Section";
import Paragraph from "./common/Paragraph";
import MiniGallery from "./common/MiniGallery";
import VerticalSection from "./common/VerticalSection";
import Footer from "./common/Footer";
import { BAZA } from "./BAZA";
import LastCakes from "./features/homepage/LastCakes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation
        ikony={BAZA.strona.nawigacja.ikonki}
        linki={BAZA.strona.nawigacja.linki}
      />
      <Header text={<HeaderText />} />
      <Section
        title={"Torty"}
        content={
          <>
            <Paragraph
              text={
                "Torty Piaseczno, Ursynów, Józefosław, Warszawa i okolice możliwy dowóz do Klienta lub bezpośrednio na imprezę! Domowe, artystyczne torty, ciasta, ciasteczka, cakepopsy i minibezy na zamówienie. Domowa cukiernia rzemieślnicza w mieście Piaseczno oferuje torty i ciasta tylko z naturalnych składników. Gwarantujemy wysoką jakość produktów. Torty na zamówienie z figurkami lub bez, torty na imprezy okolicznościowe, na urodziny, bociankowe, rocznice, wesele, chrzest, komunię czy imprezę firmową. Torty Piaseczno, Warszawa i okolice na każdą okazję."
              }
            />
            <LastCakes/>
          </>
        }
      />
      <VerticalSection
        title={"Składniki"}
        text={
          "W naszych tortach nie używamy gotowych mieszanek, ulepszaczy, jajek w proszku, margaryny i utwardzonych tłuszczów roślinnych. Tylko naturalne składniki! Dla alergików na życzenie wykluczamy alergeny i produkty mogące wywoływać nietolerancje pokarmowe. Dajemy Państwu możliwość wybrania własnych kompozycji smaków i zdobień. Każdy tort jest dzięki temu unikalny."
        }
      />
      <MiniGallery
        title={"/ Oferta"}
        text={
          "Zawsze stawiamy na pierwszym miejscu zadowolenie Klienta, a więc dostosowujemy ofertę do Jego potrzeb. Terminy na torty artystyczne to tydzień lub kilka dni w zależności od trudności wykonania. Przy krótkich terminach od zamówienia na torty do realizacji, prosimy o kontakt telefoniczny w celu usprawnienia działania."
        }
      />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
