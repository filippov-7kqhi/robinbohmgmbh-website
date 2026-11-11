/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F3F5F9',
          100: '#E8ECF3',
          200: '#D3DAE6',
          300: '#AEB9CC',
          400: '#8494AE',
          500: '#5B6E8C',
          600: '#3A4F6E',
          700: '#1F3657',
          800: '#142948',
          900: '#0D1E37',
          950: '#08142A',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F5EDDA',
          200: '#EBDBB5',
          300: '#DEC48A',
          400: '#CFAA5A',
          500: '#BD9442',
          600: '#A07A33',
          700: '#84622A',
          800: '#6A4E25',
          900: '#57411F',
        },
        ivory: '#F6F3EC',
        paper: '#FBFAF7',
      },
      fontFamily: {
        sans: [
          '"Manrope Variable"',
          'Manrope',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        display: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      letterSpacing: {
        eyebrow: '0.28em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translate3d(0, 28px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'hero-zoom': {
          '0%': { transform: 'scale(1.14)' },
          '100%': { transform: 'scale(1.02)' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(250%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 1.6s ease-out both',
        'hero-zoom': 'hero-zoom 16s cubic-bezier(0.16, 1, 0.3, 1) both',
        'line-grow': 'line-grow 1.4s cubic-bezier(0.16, 1, 0.3, 1) both',
        'scroll-cue': 'scroll-cue 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
    },
  },
  plugins: [],
};
