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
        primary: '#67C1C7',
        secondary: '#FF9666',
        'primary-dark': '#21827F',
        'primary-light': '#6DD9D6',
        'secondary-dark': '#CC9900',
        'secondary-light': '#FFD147',
        text: '#212121',
        dark: '#494949',
        light: '#707070',
        red: '#C82323',
        'red-dark': '#AD1F1F',
        'red-light': '#E05252',
        'gray-100': '#1F1F1F',
        'gray-90': '#333333',
        'gray-70': '#555555',
        'gray-80': '#777777',
        'gray-60': '#999999',
        'gray-50': '#CCCCCC',
        'gray-40': '#DDDDDD',
        'gray-30': '#EEEEEE',
        'gray-20': '#F5F5F5',
        'gray-10': '#FAFAFA',
        background: '#F8F8FA',
      },
      gridTemplateColumns: {
        'auto-fill-cards': 'repeat(auto-fill, 14.75rem)',
        'auto-fill-place': 'repeat(auto-fit, minmax(25rem, 1fr))',
      },
    },
  },
  plugins: [],
};
