import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { UserProvider } from "./provider/UserProvider.tsx";
import MacroProvioder from "./provider/MacroProvioder.tsx";

createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <MacroProvioder>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MacroProvioder>
  </UserProvider>,
);
