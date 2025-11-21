/* Tailwind config for Black Qoral with custom palette and Typography */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        'blackqoral-black': '#0b0b0c',
        'blackqoral-cream': '#f5e9d4',
        'blackqoral-cream-weak': 'rgba(245, 233, 212, 0.18)'
      },
      fontFamily: {
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'soft-lg': '0 8px 28px rgba(0,0,0,0.35)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
