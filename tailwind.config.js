/** @type {import('tailwindcss/types').Config} */
const config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./templates/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#020000",
        paper: "#F6F6F8",
        darkMode: "rgba(255, 255, 255, 0.07)",
        indigo: "#A57AEE",
        leaf: "#2DD2A2",
      },
    },
  },
  plugins: [],
};

module.exports = config;
