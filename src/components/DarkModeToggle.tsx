
import React from "react";
import { Moon, Sun } from "lucide-react";

function getTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export default function DarkModeToggle() {
  const [theme, setTheme] = React.useState<"dark" | "light">(getTheme);

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button
      className="bg-background border border-border rounded-full p-2 hover:bg-accent transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <span className="inline-flex items-center transition-all duration-200">
        <Sun
          className={`h-5 w-5 text-yellow-400 transition-transform duration-200 ${theme === "light" ? "scale-100 rotate-0" : "scale-0 -rotate-180"}`}
        />
        <Moon
          className={`h-5 w-5 text-indigo-600 dark:text-yellow-200 absolute transition-transform duration-200 ${theme === "dark" ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
        />
      </span>
    </button>
  );
}
