import ReactDOM from "react-dom/client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";

import { App } from "./App";
import { SocketProvider } from "./contexts/SocketContext.contexts";
import { GlobalStyle } from "./global-style.style";
import theme from "./theme";

const cacheRtl = createCache({
  key: "muirtl",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <SocketProvider>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={GlobalStyle} />
          <CssBaseline />
          <App />
        </ThemeProvider>
      </CacheProvider>
    </SocketProvider>
  </>
);
