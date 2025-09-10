// src/context/ThemeContext.tsx
"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export const colors = ["red", "blue", "magenta", "green", "orange"];

interface ThemeContextProps {
  color: string;
  setColor: (color: string) => void;
  availableColors: string[];
}

const ThemeContext = createContext<ThemeContextProps>({
  color: "red",
  setColor: () => {},
  availableColors: colors,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [color, setColorState] = useState("red");

  const setColor = (newColor: string) => {
    setColorState(newColor);
    localStorage.setItem("themeColor", newColor);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor && colors.includes(savedColor)) {
      setColorState(savedColor);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ color, setColor, availableColors: colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
