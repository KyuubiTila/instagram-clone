import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeInOut1: {
          '0%': { opacity: '0' },
          '1%': { opacity: '100' },
          '25%': { opacity: '100' },
          '29%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        fadeInOut2: {
          '0%': { opacity: '0' },
          '24%': { opacity: '0' },
          '25%': { opacity: '100' },
          '50%': { opacity: '100' },
          '54%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        fadeInOut3: {
          '0%': { opacity: '0' },
          '49%': { opacity: '0' },
          '50%': { opacity: '100' },
          '75%': { opacity: '100' },
          '79%': { opacity: '0' },
          '100%': { opacity: '0' },
        },
        fadeInOut4: {
          '0%': { opacity: '0' },
          '74%': { opacity: '0' },
          '75%': { opacity: '100' },
          '99%': { opacity: '100' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        loginImage1: 'fadeInOut1 20s ease-in-out infinite',
        loginImage2: 'fadeInOut2 20s ease-in-out infinite',
        loginImage3: 'fadeInOut3 20s ease-in-out infinite',
        loginImage4: 'fadeInOut4 20s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
