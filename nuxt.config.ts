// Nuxt 3 config with Tailwind + Typography + Poppins + Spline viewer
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Black Qoral — Markets, Business, Finance & Tech Analysis',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0b0b0c' },
        { name: 'description', content: 'Premium insights on markets, business, finance, and technology analysis.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' }
      ],
      script: [
        { src: 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js', defer: true }
      ]
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    viewer: false
  },
  // Ensure server binds correctly and avoid HMR port conflicts in this environment
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  vite: {
    server: {
      hmr: {
        port: 24679
      }
    }
  },
  compatibilityDate: '2024-11-01'
})
