import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggleComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className='px-4 md:py-2 sm:py-1   text-sm md:text-md bg-primary text-text rounded-full'
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
