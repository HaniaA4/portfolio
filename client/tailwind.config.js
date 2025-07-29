module.exports = {
  darkMode: 'class', // <-- Add this line
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' }
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        floatX: 'floatX 3s ease-in-out infinite'
      }
    }
  },
  plugins: [],
};
