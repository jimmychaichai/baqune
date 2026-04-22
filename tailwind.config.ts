import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'sans-serif'],
      },
      colors: {
        paper: '#fafafa',
        ink: '#1a1220',
        neon: {
          pink: '#ff4fb8',
          purple: '#9d4edd',
          magenta: '#ff2d95',
        },
      },
      boxShadow: {
        neon: '0 0 20px rgba(255, 79, 184, 0.55), 0 0 40px rgba(157, 78, 221, 0.35)',
        'neon-soft': '0 0 12px rgba(255, 79, 184, 0.35)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #ff4fb8 0%, #9d4edd 100%)',
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
