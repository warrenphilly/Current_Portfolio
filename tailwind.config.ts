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
          600: '#E63E3E',
          700: '#C62828',
          800: '#8B1F1F',
          900: '#5C0F0F',
        },
        navy: {
          50: '#E7E9EF',
          100: '#C2C9D6',
          200: '#9BA6BC',
          300: '#7483A2',
          400: '#566A8F',
          500: '#3B517C',
          600: '#324775',
          700: '#283C6B',
          800: '#1E3162',
          900: '#0F1D4E',
        },
        darkBlue: {
          50: '#E6EAF0',
          100: '#BFD0E0',
          200: '#95B3CE',
          300: '#6A95BC',
          400: '#4A7FAE',
          500: '#2A69A0',
          600: '#246198',
          700: '#1D568E',
          800: '#164C84',
          900: '#0B3973',
        },
        grey: {
          50: '#F0F1F3',
          100: '#D9DCE1',
          200: '#C0C5CD',
          300: '#A7AEB9',
          400: '#949DAA',
          500: '#818C9B',
          600: '#798493',
          700: '#6E7989',
          800: '#646F7F',
          900: '#515C6D',
        },
        // New light blue palette
        lightBlue: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
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
