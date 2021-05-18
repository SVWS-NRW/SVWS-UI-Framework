module.exports = {
  purge: ['./src/components/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#FFF',
      black: '#2C2C2C',
      gray: '#666',
      primary: '#329CD5',
      light: '#F0F4F7',
      'dark-20': '#C8D0D6',
      dark: '#2B4452',
      error: '#EB6161',
      success: '#B6E65C',
      highlight: '#FFF693',

      disabled: {
        light: '#F3F3F3',
        DEFAULT: '#D9D9D9',
        medium: '#C0C0C0',
        dark: '#959595',
      },

      brown: '#9B8458',
      'brown-light': '#D6CDBC',
      'brown-dark': '#625337',
      orange: '#FDB34E',
      'orange-light': '#FFE1B9',
      'orange-dark': '#B26701',
      purple: '#B472ED',
      'purple-light': '#E0D2ED',
      'purple-dark': '#461C6A',
      blue: '#6D88E5',
      'blue-light': '#CBD3EF',
      'blue-dark': '#182D74',
      green: '#89EDCA',
      'green-light': '#BEE8DA',
      'green-dark': '#0F5D42',
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      mono: [
        'SFMono-Regular',
        'Consolas',
        '"Liberation Mono"',
        'Menlo',
        'monospace',
      ],
    },
    fontSize: {
      caption: ['0.625rem', { lineHeight: '1.5' }],
      button: ['0.8125rem', { lineHeight: '1.125' }],
      body: ['0.875rem', { lineHeight: '1.5' }],
      input: ['1rem', { lineHeight: '1.25' }],
      'headline-5': ['1rem', { lineHeight: '1.25' }],
      'headline-4': ['1.25rem', { lineHeight: '1.25' }],
      'headline-3': ['1.5rem', { lineHeight: '1.25' }],
      'headline-2': ['2.125rem', { lineHeight: '1.2' }],
      'headline-1': ['3rem', { lineHeight: '1.125' }],
    },
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {
      maxWidth: {
        '116': '29rem',
        'modal-sm': '28rem',
        'modal-md': '76rem',
        'modal-lg': '116rem',
      },
      minWidth: {
        '84': '21rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
