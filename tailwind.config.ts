/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import {heroui} from "@heroui/react";

const config: Config = {
  darkMode: "class",
  daisyui: {
    themes: ['class']
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D9CDB',     
        secondary: '#27AE60',   
        background: '#F2F4F7',  
        text: '#333333',        
        accent: '#F2994A',      
      },
    },
  },
  plugins: [require('daisyui'), heroui()],
};
export default config;
