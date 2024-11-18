"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import styles from "./ThemeSwitcher.module.css";

type Theme = "light" | "dark";

export const ThemeSwitcher = (): JSX.Element => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, [setTheme]);

  const toggleTheme = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === "light" ? <IconSun size={24} /> : <IconMoon size={24} />}
    </div>
  );
};
