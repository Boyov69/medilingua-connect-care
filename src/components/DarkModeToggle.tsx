
import React from "react";
import { Moon, Sun } from "lucide-react";

function getTheme(): "dark" | "light" {
  // Check localStorage first for user preference
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    
    // Check system preference if no saved preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
  }
  
  // Default to light if no preference found
  return "light";
}

export default function DarkModeToggle() {
  const [theme, setTheme] = React.useState<"dark" | "light">(getTheme);

  // Apply theme on component mount and when theme changes
  React.useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
    
    // Apply theme to document
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Apply initial theme on component mount
  React.useEffect(() => {
    // Set initial class based on stored theme
    const initialTheme = getTheme();
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button
      className="bg-background border border-border rounded-full p-2 hover:bg-accent transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary relative"
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <span className="inline-flex items-center justify-center w-5 h-5 relative">
        {/* Sun icon for light mode */}
        <Sun
          className={`absolute w-5 h-5 text-yellow-400 transition-all duration-300 
            ${theme === "light" ? "opacity-100 transform scale-100" : "opacity-0 transform scale-0"}`}
        />
        {/* Moon icon for dark mode */}
        <Moon
          className={`absolute w-5 h-5 text-indigo-600 dark:text-yellow-200 transition-all duration-300
            ${theme === "dark" ? "opacity-100 transform scale-100" : "opacity-0 transform scale-0"}`}
        />
      </span>
    </button>
  );
}
