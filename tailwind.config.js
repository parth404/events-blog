/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      bg: {
        position: "fixed",
        top: "-50%",
        left: "-50%",
        right: "-50%",
        bottom: "-50%",
        width: "200%",
        height: "200vh",
        background:
          'transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0',
        backgroundRepeat: "repeat",
        opacity: " 0.9",
        visibility: "visible",
      },
      keyframes: {
        bgAnimation: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "10%": {
            transform: "translate(-5%, -5%)",
          },
          "20%": {
            transform: "translate(-10%, 5%)",
          },
          "30%": {
            transform: "translate(5%, -10%)",
          },
          "40%": {
            transform: "translate(-5%, 15%)",
          },
          "50%": {
            transform: "translate(-10%, 5%)",
          },
          "60%": {
            transform: "translate(15%, 0)",
          },
          "70%": {
            transform: "translate(0, 10%)",
          },
          "80%": {
            transform: "translate(-15%, 0)",
          },
          "90%": {
            transform: "translate(10%, 5%)",
          },
          "100%": {
            transform: "translate(5%, 0)",
          },
        },
      },
      animation: { "noise-effect": "bgAnimation 0.2s infinite" },
    },
    plugins: [],
  },
};
