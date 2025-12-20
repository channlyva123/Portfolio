/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg))",
        text: "rgb(var(--text))",
        primary: "rgb(var(--primary))",
        card: "rgb(var(--card))",
      },
    },
  },
  plugins: [],
};
