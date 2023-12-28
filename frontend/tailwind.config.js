/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      m: '896px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      // Add more custom screen sizes here
    },
    extend: {
      // backgroundImage: {
      //   banner: 'url(srcassets\banner.png)',
      // },
      colors: {
        blueButton: {
          50: '#4bb4f8',
          100: '#0095f6',
          150: '#0086dd',
        },

        textPrimary: {
          50: '#737373',
        },
        igSeparator: {
          50: '#dbdbdb',
          100: '#fafafa',
          150: '#a8a8a8',
        },
        facebook: {
          50: '#385185',
          100: '#00376b',
        },
      },
      fontFamily: {
        system: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        'system-primary': [
          'Instagram Sans UI',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ['peer-focus'],
      display: ['peer-focus'],
      visibility: ['peer-focus'],
      top: ['peer-focus'],
    },
  },
}
