/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        active: "#2563eb", // blue-600
        "active-dark": "#1d4ed8", // blue-700
        "active-light": "#1d4ed8", // blue-500
        primary: "#334155", //slate-700
        "primary-light": "#64748b", //slate-500
        "primary-dark": "#1e293b", //slate-800
        secondary: "#ffffff", // white
      },
      backgroundColor: {
        "button-primary": "#3b82f6", // blue-500
        "button-primary-dark": "#1d4ed8", // blue-700
        "button-primary-hover": "#2563eb", // blue-600
      },
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
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["data-theme=light"],
          "base-content": "#334155",
          primary: "#3b82f6",
          ".btn": {
            "text-transform": "capitalize",
          },
          ".btn-primary": {
            "text-transform": "capitalize",
            color: "#fff",
            "padding-top": "0.5rem",
            "padding-bottom": "0.5rem",
            "padding-left": "1.25rem",
            "padding-right": "1.25rem",
          },
        },
      },
      "dark",
    ],
    logs: false,
  },
};
