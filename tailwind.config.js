module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      xl: '1280px',
      lg: '1024px',
      md: '768px',
      sm: '640px',
      xs: '290px',
    },
    extend: {
      colors: {
        PrimaryVariant: '#78350f', // amber-900
        Primary: '#b45309', // amber-700
        Secondary: '#475569', // slate-600
        SecondaryVariant: '#cbd5e1', // slate-300
        bgPri: '#f1f5f9', // slate-100
      },

      fontFamily: {
        Great: ['Great Vibes', 'cursive'],
        Playfair: ['Playfair Display', 'serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },

      backgroundSize: {
        'Size-200': '200% 200%',
      },

      backgroundPosition: {
        'Pos-0': '0% 0%',
        'Pos-100': '100% 100%',
      },
      backgroundImage: {
        'hero-img': "url('https://drive.google.com/uc?export=view&id=12dq6ieRjtoC4bXGduNqlcAtf1OczyLvF')",
      }
    }, 
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tw-elements/dist/plugin'),
  ],
}
