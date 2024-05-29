/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      spacing: {
        "15percent": "30%",
        "40percent": "45%"
      },
      width: {
        '9/10': '90%', 
      },
    },
  },
  plugins: [],
}