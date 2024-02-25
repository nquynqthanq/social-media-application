import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QuerProvider } from "./lib/react-query/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QuerProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QuerProvider>
  </BrowserRouter>
);
