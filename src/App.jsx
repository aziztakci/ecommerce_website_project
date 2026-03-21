
import React from "react";
import GlobalContextProvider from "./contexts/globalContext";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={
            <div className="w-max-[1077px]"> {/* TODO / homepage e geçtiğiğnde düzenle */}
            <HomePage />
            </div>
            } />
        </Routes>
      </Layout>
    </GlobalContextProvider>
  );
}
