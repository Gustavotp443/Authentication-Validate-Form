import Routering from "./Routes";
import GlobalStyles from "./styles/global.styles";
import theme from "./themes/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routering />
      </ThemeProvider>
    </div>
  );
}

export default App;
