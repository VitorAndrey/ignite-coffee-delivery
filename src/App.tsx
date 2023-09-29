import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./contexts/CartContext";
import { AddressContextProvider } from "./contexts/AddressContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <CartContextProvider>
            <AddressContextProvider>
              <Router />
            </AddressContextProvider>
          </CartContextProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
