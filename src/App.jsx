import React from "react";
import GlobalContextProvider from "./contexts/GlobalContext.jsx";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        
      </Layout>
      <ToastContainer 
        position="top-right" 
        autoClose={10000} 
        theme="colored" 
      />
    </GlobalContextProvider>
  );
}

//layout altına toastify tanımla, dil butonu eklediğinde...