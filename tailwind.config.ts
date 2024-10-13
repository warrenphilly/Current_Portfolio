import type { Config } from "tailwindcss";
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        warm: {
          50: '#FFF9F5',
          100: '#FFF1E6',
          200: '#FFE4D3',
          300: '#FFD5B8',
          400: '#FFC59E',
          500: '#FFB385',
          600: '#FF9E66',
          700: '#FF8947',
          800: '#FF7328',
          900: '#FF5D09',
        },
        red: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFA8A8',
          400: '#FF8787',
          500: '#FF6B6B',
          600: '#FA5252',
          700: '#F03E3E',
          800: '#E03131',
          900: '#C92A2A',
        },
        darkRed: {
          50: '#FFF0F0',
          100: '#FFDBDB',
          200: '#FFC2C2',
          300: '#FFA3A3',
          400: '#FF7A7A',
          500: '#FF4D4D',
          600: '#E63E3E',  // Bright red
          700: '#C62828',  // Deep red
          800: '#8B1F1F',  // Maroon
          900: '#5C0F0F',  // Burgundy
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
