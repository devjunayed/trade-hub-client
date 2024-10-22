import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
