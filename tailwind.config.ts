import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#10131a",
        "bg-elevated": "#161b24",
        "text-primary": "#e6e9ef",
        "text-secondary": "#8d96a6",
        "text-tertiary": "#5a6274",
        accent: "#c88a3b",
        border: "#232936",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;