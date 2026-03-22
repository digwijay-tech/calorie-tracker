import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { UserProvider } from "./provider/UserProvider.tsx";
import MacroProvioder from "./provider/MacroProvioder.tsx";
import DatasetProvider from "./provider/DatasetProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <MacroProvioder>
      <DatasetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DatasetProvider>
    </MacroProvioder>
  </UserProvider>,
);
