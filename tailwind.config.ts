import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef3f7",
          100: "#dbe4ec",
          700: "#244866",
          800: "#1d3d5d",
          900: "#17324D"
        },
        mineral: {
          50: "#F7F9FA",
          100: "#edf1f4",
          200: "#BEC6CD",
          500: "#5D7082",
          700: "#425566",
          900: "#1e2a35"
        },
        copper: {
          300: "#BEC6CD",
          500: "#5D7082",
          700: "#17324D"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(23, 50, 77, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
