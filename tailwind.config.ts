import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "'Noto Sans JP'",
          "'Hiragino Kaku Gothic ProN'",
          "'Yu Gothic'",
          "sans-serif",
        ],
      },
      colors: {
        /* ===== New design system ===== */
        page: "#F7F9F7",
        surface: { DEFAULT: "#FFFFFF", alt: "#EFF4EF" },
        primary: { DEFAULT: "#2C6E49", light: "#4A9970" },
        accent: { DEFAULT: "#E8532A", hover: "#C94420" },
        main: "#1A2820",
        sub: "#4A5D53",
        mute: "#7A9485",
        line: "#D4E2D8",
        danger: "#C94420",
        "badge-bg": "#FFF3EF",

        /* ===== Legacy (kept for /contact, /terms, etc.) ===== */
        sage: {
          50: "#f4f9f4", 100: "#e4f0e4", 200: "#c9e0c9", 300: "#a4c9a4",
          400: "#8fbc8f", 500: "#6da06d", 600: "#578157", 700: "#466846",
          800: "#3a543a", 900: "#304530", 950: "#182518",
        },
        rescue: {
          50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d",
          400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309",
          800: "#92400e", 900: "#78350f", 950: "#451a03",
        },
        coral: {
          50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af",
          400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c",
          800: "#9f1239", 900: "#881337", 950: "#4c0519",
        },
        ink: {
          50: "#f6f7f8", 100: "#ebedf0", 200: "#d3d7de", 300: "#adb5c0",
          400: "#818c9c", 500: "#636e80", 600: "#4f5869", 700: "#414956",
          800: "#383f49", 900: "#2d323a", 950: "#1a1d23",
        },
      },
      borderRadius: {
        card: "12px",
        "card-lg": "20px",
        "card-xl": "28px",
        pill: "50px",
        /* Legacy */
        pop: "16px",
        "pop-sm": "12px",
        "pop-lg": "20px",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(44, 110, 73, 0.08)",
        "card-hover": "0 4px 20px rgba(44, 110, 73, 0.12)",
        btn: "0 4px 16px rgba(232, 83, 42, 0.25)",
        "btn-hover": "0 8px 24px rgba(232, 83, 42, 0.35)",
        "btn-active": "0 2px 8px rgba(232, 83, 42, 0.2)",
        glass: "0 2px 16px rgba(44, 110, 73, 0.06)",
        /* Legacy */
        pop: "4px 4px 0px 0px rgba(26, 29, 35, 0.15)",
        "pop-sm": "2px 2px 0px 0px rgba(26, 29, 35, 0.12)",
        "pop-lg": "6px 6px 0px 0px rgba(26, 29, 35, 0.18)",
        "pop-hover": "2px 2px 0px 0px rgba(26, 29, 35, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
