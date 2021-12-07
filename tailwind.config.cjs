module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nord0: '#2E3440',
        nord1: '#3B4252',
        nord2: '#434C5E',
        nord3: '#4C566A',
        nord4: '#D8DEE9',
        nord5: '#E5E9F0',
        nord6: '#ECEFF4',
        nord7: '#8FBCBB',
        nord8: '#88C0D0',
        nord9: '#81A1C1',
        nord10: '#5E81AC',
        nord11: '#BF616A',
        nord12: '#D08770',
        nord13: '#EBCB8B',
        nord14: '#A3BE8C',
        nord15: '#B48EAD',
      },
      fill: {
        transparent: 'transparent',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              a: {
                color: theme('colors.nord10'),
              },
            },
          ],
        },
        light: {
          css: [
            {
              color: theme('colors.nord5'),
              h1: {
                color: theme('colors.nord6'),
              },
              a: {
                color: theme('colors.nord8'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
