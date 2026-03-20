import { Camera } from "lucide-react";
import React from "react";
import GlobalContextProvider from "./contexts/globalContext";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <GlobalContextProvider>
      <Layout>
        <h1 class="text-3xl font-bold underline">
    Tailwind Test......
  </h1>
      </Layout>
    </GlobalContextProvider>
  );
}
