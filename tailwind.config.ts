/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  daisyui: {
    themes: ['light']
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
  plugins: [require('daisyui'), nextui()],
};
export default config;
