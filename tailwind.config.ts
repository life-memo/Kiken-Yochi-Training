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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#baddfd",
          300: "#7dc2fc",
          400: "#38a3f8",
          500: "#0e87e9",
          600: "#0269c7",
          700: "#0354a1",
          800: "#074885",
          900: "#0c3d6e",
          950: "#082749",
        },
        accent: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc071",
          400: "#ff9a38",
          500: "#fe7d11",
          600: "#ef6207",
          700: "#c64908",
          800: "#9d3a0f",
          900: "#7e3110",
          950: "#441606",
        },
      },
    },
  },
  plugins: [],
};
export default config;
