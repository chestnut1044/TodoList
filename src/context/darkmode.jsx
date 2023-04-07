import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const body = document.querySelector("body");
  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
    body.style.backgroundColor = darkMode ? "#1f4e5f" : "#aacfd0";
  };
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
