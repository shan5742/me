import React from "react";
import { ThemeContext } from "../context/themeContext";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      className="text-4xl"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
};
