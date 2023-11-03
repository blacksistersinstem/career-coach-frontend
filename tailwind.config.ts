import type { Config } from "tailwindcss";
import { playfair } from "./styles/font";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#242E49",
        secondary: {
          1: "#526AA2",
          2: "#9280B9",
          3: "#B784BA",
          4: "#A665A7",
          5: "#934C9C",

        },
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        playfair: ["var(--font-playfair-display)"],
        gilroy: ["var(--gilroy)"]
      },
      fontSize: {
        'h1': '3.5rem',
        'h2': '3rem',
        'h3': '2.5rem',
        'h4': '2rem',
        'h5': '1.5rem',
        'h6': '1.25rem',
        base: '1rem',
        caption: '0.8rem'
      },
      fontWeight: {
        thin: "100",
        "ultra-light": "200",
        light: "300",
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
        "extra-bold": "800",
        black: "900",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
  safelist: [
    {
      pattern: /(bg|text|border)-(primary|secondary-1|secondary-2|secondary-3|secondary-4|secondary-5|)/, //Adding this to safe list because the colours were getting purged
    }
  ]
};
export default config;
