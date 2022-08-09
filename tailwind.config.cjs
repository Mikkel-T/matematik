module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fill: {
        transparent: "transparent",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-dracula")("dracula"),
  ],
};
