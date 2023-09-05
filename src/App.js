import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme";
import Navigation from "./common/Navigation";
import Footer from "./common/Footer";
import { BAZA } from "./BAZA";
import Homepage from "./features/homepage";
import Menu from "./features/menu";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Cakes from "./features/cakes";
import Cake from "./features/cakes/cake";
import SweetTable from "./features/sweetTable";
import Pops from "./features/sweetTable/pop";

function App() {
  const toCake = ({ id,category } = { id: ":id", category: ":category" }) => `/torty/${category}/${id}`;
  const toSweetTable = ({ id } = { id: ":id"}) => `/slodki-stol/${id}`;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation
          ikony={BAZA.strona.nawigacja.ikonki}
          linki={BAZA.strona.nawigacja.linki}
        />
        <Switch>
          <Route path="/cennik">
            <Menu />
          </Route>
          <Route path={toCake()}>
            <Cake/>
          </Route>
          <Route path={toSweetTable()}>
            <Pops/>
          </Route>
          <Route path="/torty">
            <Cakes />
          </Route>
          <Route path="/slodki-stol">
            <SweetTable/>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
