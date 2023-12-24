/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   banner: 'url(srcassets\banner.png)',
      // },
      colors: {
        blueButton: {
          50: '#0094f6',
          100: '#1b74e4',
        },
        textPrimary: {
          50: '#737373',
        },
        igSeparator: {
          50: '#dbdbdb',
        },
        facebook: {
          50: '#385185',
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
}
