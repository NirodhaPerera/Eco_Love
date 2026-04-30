/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        keyframes: {
          scrollDown: {
            '0%, 100%': { backgroundColor: '#22c55e' },  // green-500
          '50%': { backgroundColor: '#ffffff' },  
          },
        },
        animation: {
          scrollDown: 'scrollDown 2s ease-in-out infinite',
        },
      },
    },
    plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
  }
  