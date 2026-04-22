import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Shippori Mincho B1"', '"Noto Serif JP"', 'serif'],
        display: [
          '"Cormorant Garamond"',
          '"Shippori Mincho B1"',
          'serif',
        ],
      },
      colors: {
        paper: '#f8f4ee', // warm ivory
        cream: '#fdfaf5',
        ink: '#1b1019', // deep plum ink
        mauve: {
          50: '#f8f1f5',
          100: '#ecdfe7',
          300: '#c9a7bc',
          500: '#8f6780',
          700: '#5a3f52',
        },
        wine: '#5b2236',
        champagne: {
          light: '#e8d9b8',
          DEFAULT: '#c9a876',
          dark: '#8f7446',
        },
        neon: {
          pink: '#ff4fb8',
          purple: '#9d4edd',
          magenta: '#ff2d95',
        },
      },
      boxShadow: {
        neon: '0 0 22px rgba(255, 79, 184, 0.45), 0 0 44px rgba(157, 78, 221, 0.28)',
        'neon-soft': '0 0 14px rgba(255, 79, 184, 0.3)',
        luxe: '0 30px 60px -30px rgba(27, 16, 25, 0.35)',
        gold: '0 0 22px rgba(201, 168, 118, 0.45)',
      },
      backgroundImage: {
        'neon-gradient':
          'linear-gradient(135deg, #ff4fb8 0%, #9d4edd 60%, #5b2236 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #e8d9b8 0%, #c9a876 50%, #8f7446 100%)',
        'ivory-radial':
          'radial-gradient(ellipse at top, #fdfaf5 0%, #f8f4ee 60%, #efe6dc 100%)',
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards',
      },
    },
  },
  plugins: [],
};

export default config;
