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
          primary: "#a991f7", // This is the color of the primary button
          secondary: "#f6d860", // This is the color of the secondary button
          accent: "#146C94", // This is the color of the accent button
          neutral: "#3d4451", // This is the color of the neutral button
          "base-100": "#ffff", // This is the color of the background
          "--rounded-box": "1rem", // This sets the border radius for large boxes
          "--rounded-btn": "0.5rem", // This sets the border radius for buttons
          "--rounded-badge": "1.9rem", // This sets the border radius for badges
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
