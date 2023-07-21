/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      height: {
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      maxHeight: {
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      width: {
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '4.5': ''
      },
      colors: {
        primary: {
          100: '#143F6B', /* Dark Blue */
          150: '#1A1423', /* Darkest Blue */
          200: '#F55353', /* Red */
        },
        accent: {
          100: '#FEB139', /* Yellow */
          200: '#F6F54D', /* Light Yellow */
        },
        background: {
          100: '#6b4014', /* Dark Red */
          // 200: '#372549',
          // 300: '#1A1423',
        },
        
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        lg: '20px',
        base: '18px',
      },
      container: {
      center: true,
      },
      top: {
        '0': "0px"
      },
      bottom: {
        '0': "0px"
      },
      padding: {
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
      },     
      margin: {
        '0' : '0px',
        '0.5': '0.125rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
      },
      
    },
  },
  plugins: [],
}