import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        surface: "#090611",
        midnight: "#020208",
      },
      fontFamily: {
        display: ["var(--font-space)", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(255,255,255,0.05), 0 0 60px rgba(139,92,246,0.25)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        glow: "glow 2.6s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "50%": { transform: "translate3d(0,-18px,0) rotate(2deg)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 24px rgba(139,92,246,0.22)" },
          "50%": { boxShadow: "0 0 58px rgba(217,70,239,0.34)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(18px,-24px,0) scale(1.03)" },
        },
      },
    },
  },
  plugins: [animate],
};

export default config;
