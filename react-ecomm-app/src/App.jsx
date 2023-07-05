import React, { Component } from "react";
import { NavBar } from "./NavBar/NavBar";
import Form from "./Login/Form";
import ProductsPage from "./Products/ProductsPage";
import { CartPage } from "./Cart/CartPage";
import { ProductsContextProvider } from "./Context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { MainContent } from "./MainContent";
// const router = createBrowserRouter([
//   { path: "/", element: <Form /> },
//   { path: "/products", element: <ProductsPage /> },
//   { path: "/cart", element: <CartPage /> },
// ]);
function App() {
  return (
    <React.Fragment>
      <ProductsContextProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </ProductsContextProvider>
    </React.Fragment>
  );
}

export default App;
