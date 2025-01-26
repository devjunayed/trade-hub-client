/* eslint-disable @typescript-eslint/no-unused-vars */
// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  console.log(theme)

  return (
    <div>
      <button className={`${theme === "light" && "hidden"}`} onClick={() => setTheme('light')}><MdLightMode /></button>
      <button className={`${theme === "dark" && "hidden"}`} onClick={() => setTheme('dark')}><MdOutlineLightMode /></button>
    </div>
  )
};