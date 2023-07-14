/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: { max: '819px' },
      md: { min: '820px', max: '1023px' },
      lg: { min: '1080px' },
    },
    extend: {
      colors: {
        primary: '#32C3BE',
        secondary: '#FFC107',
        'primary-dark': '#21827F',
        'primary-light': '#6DD9D6',
        'secondary-dark': '#CC9900',
        'secondary-light': '#FFD147',
        text: '#212121',
        dark: '#494949',
        light: '#707070',
        white: '#F5F5F5',
        red: '#C82323',
        'red-dark': '#AD1F1F',
        'red-light': '#E05252',
      },
    },
  },
  plugins: [],
};
