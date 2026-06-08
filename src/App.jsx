import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;