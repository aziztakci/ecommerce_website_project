import React from "react";
import GlobalContextProvider from "./contexts/GlobalContext.jsx";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage.jsx";

export default function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        
      </Layout>
    </GlobalContextProvider>
  );
}

/*

  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const highlightContent = allData[lang].highlightSection;
  
  bu yapıyı her component için yazmaya devam etme. appjsx içinde tanımla, prop olarak ilet,
  const highlightContent = allData[lang].highlightSection; kısmını ise prop olarak alan componentin içinde özelleştir hangi veriyle çalışacaksan...
  
  */