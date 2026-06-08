import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";

import Services from "../pages/services/Services";
import Delivery from "../pages/services/Delivery";
import Support from "../pages/services/Support";
import Returns from "../pages/services/Returns";

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/services"
          element={<Services />}
        >
          <Route
            path="delivery"
            element={<Delivery />}
          />
          <Route
            path="support"
            element={<Support />}
          />
          <Route
            path="returns"
            element={<Returns />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;