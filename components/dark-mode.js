"use client";

import useDarkMode from "@/hooks/use-dark-mode";

const nextModeIcons = {
  light: "🌚",
  dark: "☀️",
};

export default function DarkMode({ defaultTheme }) {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      className="inline-flex items-center gap-2 rounded-full px-3 py-1"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="text-lg">{nextModeIcons[theme]}</span>

      {/* Toggle track */}
      <span
        className={[
          "relative inline-flex h-6 w-10 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200",
          isDark ? "bg-zinc-700" : "bg-zinc-300",
        ].join(" ")}
        aria-hidden="true"
      >
        {/* Toggle knob */}
        <span
          className={[
            "pointer-events-none inline-block h-5 w-5 translate-y-0.5 transform rounded-full bg-white shadow transition duration-200",
            isDark ? "translate-x-5" : "translate-x-0.5",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
