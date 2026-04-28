import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea580c",
        secondary: "#4ecdc4",
        dark: "#292f36",
        light: "#f7fff7",
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
