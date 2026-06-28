/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        drift1: "drift1 18s ease-in-out infinite alternate",
        drift2: "drift2 22s ease-in-out infinite alternate",
        "spin-slow": "spin 28s linear infinite",
        "spin-slower": "spin 40s linear infinite reverse",
        scanline: "scanline 4s ease-in-out infinite",
        blink: "blink 1.1s step-end infinite",
      },

      keyframes: {
        drift1: {
          from: {
            transform: "translate(0px, 0px) scale(1)",
          },
          to: {
            transform: "translate(40px, -30px) scale(1.1)",
          },
        },

        drift2: {
          from: {
            transform: "translate(0px, 0px) scale(1.05)",
          },
          to: {
            transform: "translate(-30px, 40px) scale(0.95)",
          },
        },

        scanline: {
          "0%": {
            top: "10%",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            top: "90%",
            opacity: "0",
          },
        },

        blink: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};