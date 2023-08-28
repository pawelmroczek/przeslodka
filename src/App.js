import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import { BAZA } from "./BAZA";
import Homepage from "./features/homepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation
        ikony={BAZA.strona.nawigacja.ikonki}
        linki={BAZA.strona.nawigacja.linki}
      />
     <Homepage/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
