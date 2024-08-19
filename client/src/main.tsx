import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import ThemeWrapper from "./components/theme/ThemeWrapper.tsx";
import { PersistGate } from "redux-persist/integration/react";
import "./i18n.ts";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeWrapper>
        <Suspense>
          <App />
        </Suspense>
      </ThemeWrapper>
    </PersistGate>
  </Provider>
);
