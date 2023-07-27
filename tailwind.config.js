/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        slideout: "slideout 4s ease-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" },
        },
        slideout: {
          "0%, 100%": { transform: "translate(-5px)" },
          "50%": { transform: "translate(10px)" },
        },
      },
    },
  },
  plugins: [],
};
