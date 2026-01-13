/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "siri-strong": "siriStrong 4s ease-in-out infinite",
        "siri-delay": "siriStrong 6s ease-in-out infinite reverse",
      },
      keyframes: {
        siriStrong: {
          "0%": {
            transform: "scale(1) rotate(0deg)",
            opacity: "0.7",
          },
          "50%": {
            transform: "scale(1.45) rotate(180deg)",
            opacity: "1",
          },
          "100%": {
            transform: "scale(1) rotate(360deg)",
            opacity: "0.7",
          },
        },
      },
    },
  },
  plugins: [],
};