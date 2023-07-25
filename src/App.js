import { ThemeProvider } from "styled-components";
import "./App.css";
import { theme } from "./theme";
import Navigation from "./common/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
    </ThemeProvider>
  );
}

export default App;
