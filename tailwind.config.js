/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        primaryText: "var(--color-primary-text)",
      },
      fontFamily: {
        primary: ["Radio Canada", "sans-serif"],
        SFPro: ["SFPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
