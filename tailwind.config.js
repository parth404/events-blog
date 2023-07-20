/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        cardbg: "#ffff",
        body: "#141414",
      },
      backgroundImage: {
        cardgradient: "linear-gradient(315deg, #2d3436 0%, #000000 74%)",
        bodygradient:
          "radial-gradient(circle at 24.1% 68.8%, rgb(31, 31, 31) 0%, rgb(0, 0, 0) 100%)",
      },
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      transition: {
        opacity: {
          "transition-property": "transform",
          display: "0.5s",
          opacity: "0.5s",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms",
        },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee4: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        marquee2: "marquee2 35s linear infinite",
        marquee3: "marquee3 15s linear infinite",
        marquee4: "marquee4 15s linear infinite",
        bounce: "bounce 2s infinite",
      },
    },
    plugins: [require("@tailwindcss/line-clamp")],
  },
};
