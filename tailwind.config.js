function withOpacity(cssVariale) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVariale}), ${opacityValue})`;
    }
    return `rgb(var(${cssVariale}))`;
  };
}

module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ['./src/components/**/*.{vue,js,ts,jsx,tsx}'],
    safelist: ['theme-dark'],
  },
  darkMode: false,
  theme: {
    colors: {
      disabled: {
        light: '#F3F3F3',
        DEFAULT: '#D9D9D9',
        medium: '#C0C0C0',
        dark: '#959595',
      },
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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        white: withOpacity('--svws-ui-color-white'),
        black: withOpacity('--svws-ui-color-black'),
        gray: withOpacity('--svws-ui-color-gray'),
        primary: withOpacity('--svws-ui-color-primary'),
        light: withOpacity('--svws-ui-color-light'),
        'dark-20': withOpacity('--svws-ui-color-dark-20'),
        'dark-80': withOpacity('--svws-ui-color-dark-80'),
        dark: withOpacity('--svws-ui-color-dark'),
        error: withOpacity('--svws-ui-color-error'),
        success: withOpacity('--svws-ui-color-success'),
        highlight: withOpacity('--svws-ui-color-highlight'),

        brown: withOpacity('--svws-ui-color-brown'),
        'brown-light': withOpacity('--svws-ui-color-brown-light'),
        'brown-dark': withOpacity('--svws-ui-color-brown-dark'),
        orange: withOpacity('--svws-ui-color-orange'),
        'orange-light': withOpacity('--svws-ui-color-orange-light'),
        'orange-dark': withOpacity('--svws-ui-color-orange-dark'),
        purple: withOpacity('--svws-ui-color-purple'),
        'purple-light': withOpacity('--svws-ui-color-purple-light'),
        'purple-dark': withOpacity('--svws-ui-color-purple-dark'),
        blue: withOpacity('--svws-ui-color-blue'),
        'blue-light': withOpacity('--svws-ui-color-blue-light'),
        'blue-dark': withOpacity('--svws-ui-color-blue-dark'),
        green: withOpacity('--svws-ui-color-green'),
        'green-light': withOpacity('--svws-ui-color-green-light'),
        'green-dark': withOpacity('--svws-ui-color-green-dark'),
      },
      opacity: {
        92: '0.92',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      },
      maxWidth: {
        116: '29rem',
        'modal-sm': '28rem',
        'modal-md': '76rem',
        'modal-lg': '116rem',
      },
      minWidth: {
        84: '21rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'svws-ui-',
};
