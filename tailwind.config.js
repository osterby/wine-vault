/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {
        fontFamily: {
          mono: '"IBM Plex Mono", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        },
        colors: {
          'skin-yellow': '#F8D567',
          'skin-button-yellow': '#FAE59E',
          'skin-hero-body': '#1F2010',
          'skin-bg-yellow': '#FCEFC5',
          'skin-bg-red': '#941B0C',
        },
        backgroundImage: {
          'footer-pattern': "url('../public/vineyard_long.png')",
          'sky-pattern': "url('../public/sky-pattern.png')",
        },
        animation: {
          background: 'moving-background 4s ease infinite',
        },
        keyframes: {
          'moving-background': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'left center',
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center',
            },
          },
        },
      },
    },
    plugins: [],
  };
  