/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width: {
        '640': '640px',
        '310': '310px',
        '90': '90px',
        '240' : '240px'
      },
      colors:{   
        'sky' : '#0ea5e9'
      },
      backgroundImage: {
        'home-pattern': "url(https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png)"
      }
    },
  },
  plugins: [],
}

