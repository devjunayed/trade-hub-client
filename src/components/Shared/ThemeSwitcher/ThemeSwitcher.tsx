/* eslint-disable @typescript-eslint/no-unused-vars */
// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
        >
          <MdLightMode size={18} />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
        >
          <MdOutlineLightMode size={18} />
        </button>
      )}
    </div>
  );
}
