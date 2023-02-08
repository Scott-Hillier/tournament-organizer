/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "800px" },
      lg: { min: "801px" },
    },
    button: ["border-2", "p-1", "mx-1", "rounded"],
  },
  plugins: [],
};
