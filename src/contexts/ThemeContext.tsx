import { createContext, useState } from "react";

const Context = createContext({
  theme: "light",
  changeTheme: () => {},
});

interface ThemeProviderProps {
  children: any;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  const changeTheme = function () {
    setTheme(theme === "light" ? "dark" : "light");
    document.querySelector("html")?.classList.toggle("dark");
  };

  return (
    <Context.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
