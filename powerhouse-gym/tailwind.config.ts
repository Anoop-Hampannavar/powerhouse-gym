import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0A',
          surface: '#121212',
          border: '#262626',
        },
        power: {
          gold: '#FFD700',
          yellow: '#E5FE00',
          red: '#FF1E00',
        },
      },
    },
  },
  plugins: [],
};

export default config;
