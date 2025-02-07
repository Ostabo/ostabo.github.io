module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    nightwind: {
      colorClasses: [
        'gradient',
        'ring',
        'ring-offset',
        'divide',
        'placeholder',
      ],
    },
    extend: {
      colors: {
        primary: {
          50: '#c8e5fc',
          300: '#8e93e8',
          600: '#474fec',
          900: '#03045e',
        },
        background: {
          50: '#ffffff',
          300: '#c3c3c3',
          600: '#393939',
          900: '#000000',
        },
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
    },
  },
  variants: {},
  // eslint-disable-next-line global-require
  plugins: [require('nightwind')],
};
