module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(7, 100%, 60%)',
        'stroke-color': 'hsl(208, 22%, 88%)',
        'font-gray': 'hsl(205, 5%, 55%)',
        'font-dark': 'hsl(0, 0%, 8%)',
        accent: 'hsl(209, 98%, 55%)',
      },
    },
  },
  plugins: [],
  // mode: 'jit',
  important: true,
}
