/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {
      spacing: {
        "navbar-height": "4rem", 
      },
      fontFamily: {
        Title: ["Fairplay Display"],
        Body: ["Poppins"],
      },
      colors: {
        light: {
          background: "#EADCED",
          text: "#333333",
        },
        dark: {
          background: "#301934",
          text: "#E2E8F0",
        },
      },
      backgroundImage: {
        dark: "linear-gradient(155deg, rgb(18, 3, 32) 0%, rgb(32, 3, 51) 61%, rgb(22, 2, 37) 97%)",
        light:
          "radial-gradient(circle farthest-corner at 10% 20%, rgba(253,239,132,1) 0%, rgba(247,198,169,1) 54.2%, rgba(21,186,196,1) 100.3%)",
      },
    },
  },
  plugins: [],
};
