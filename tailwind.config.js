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
          primary: "#372951",
          secondary: "#765c96",
          accent: "#5f3f4d",
          neutral: "#3d4451",
          "base-100": "#00000", // background
          "base-200": "#f9fafb", // button
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
