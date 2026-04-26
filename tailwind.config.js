/** @type {import('tailwindcss').Config} */
module.exports = {
  // Files Tailwind scans for class names. Output CSS only includes classes
  // that actually appear in these files, which is what makes the production
  // bundle small. Keep this list in sync with any new top-level page folders.
  content: [
    "./*.html",
    "./about/**/*.html",
    "./community/**/*.html",
    "./event/**/*.html",
    "./nextgen/**/*.html",
    "./smd344/**/*.html",
    "./assets/js/**/*.js",
  ],
  theme: {
    extend: {
      // Brand palette — previously injected at runtime via the Play CDN's
      // `tailwind.config = {...}` in assets/js/script.js. Centralized here
      // now that the project uses the Tailwind CLI build.
      colors: {
        brand: {
          50:  "#f6f8f3",
          100: "#eaefe1",
          200: "#dee5cf",
          300: "#d1dbbd",
          400: "#c1cfa5",
          500: "#adbf88",
          600: "#93a273",
          700: "#79855f",
          800: "#5f694a",
          900: "#454c36",
        },
      },
    },
  },
  plugins: [],
};
