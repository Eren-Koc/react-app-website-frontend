/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      '14px': '0.9rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '64px': '4rem',
      '48px': '3rem',
      '36px': '2rem',
      '28px': '1.75rem',
    },
    colors: {
      'app-white': '#FFFFFF',
      'app-dark-green':'#263238',
      'app-dark':'#4D4D4D',
      'app-light-green': '#4CAF4F',
      'app-light-gray': '#F5F7FA',
      'app-full-black': 'rgba(0, 0, 0, 0.54)',
      'app-neutral-gray':'#717171',
      'app-neutral-gray-light':'#89939E',
      'app-oppacity-green':'#E8F5E9',
      'app-gray-900':"#18191F",
      'app-social-medias-bg':'#3B464C',
    },
    screens: {
      'phone-450':'450px',
      'sm': '640px',
      'md': '768px',
      '960px':'960px',
      'lg': '1024px',
      '1100px': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
      'max-960px': {'max': '960px'},
      'max-640px': {'max': '640px'},
    },

  },
  plugins: [],
}

