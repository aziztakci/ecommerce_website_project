import { createContext } from "react";
import { toast } from "react-toastify";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("language", "en");

  const toggleLang = () => {
    const nextLang = lang === "en" ? "tr" : "en";
    setLang(nextLang);

    const messages = {
      tr: "Dil Türkçe olarak değiştirildi",
      en: "Language changed to English",
    };
    toast.success(messages[nextLang]);
  };

  const values = {
    lang,
    toggleLang,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
