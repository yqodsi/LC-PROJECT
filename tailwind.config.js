/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#16161D", // inter miami theme
          secondary: "#011eb3",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#00000", // background
          "base-200": "#4bc232", // button
          "base-300": "#f9fafe", // button hover
          "base-content": "#F1F6F9", // text
        },
      },
      "dark",
      "cupcake",
      "light",
      "bumblebee",
      "emerald",
      "halloween",
    ],
  },
};
