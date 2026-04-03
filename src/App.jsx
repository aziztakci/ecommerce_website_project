import React from "react";
import GlobalContextProvider from "./contexts/GlobalContext.jsx";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";

export default function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductDetail />} />
          </Routes>
        
      </Layout>
    </GlobalContextProvider>
  );
}

//layout altına toastify tanımla, dil butonu eklediğinde...