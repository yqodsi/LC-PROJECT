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
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff", // background
          "base-200": "#f9fafb", // button
          "base-300": "#f9fab", // button hover
          // "base-content": "#ffff2", // text
        },
      },
      "dark",
      "cupcake",
      "light",
    ],
  },
};
