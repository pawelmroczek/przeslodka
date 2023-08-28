import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import { BAZA } from "./BAZA";
import Homepage from "./features/homepage";
import Menu from "./features/menu";
import {
  HashRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navigation
          ikony={BAZA.strona.nawigacja.ikonki}
          linki={BAZA.strona.nawigacja.linki}
        />
        <Switch>
          <Route path="/cennik">
            <Menu />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
