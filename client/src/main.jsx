import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ColorModeSwitcher } from "./ColorModeSwitcher.jsx";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";

import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
