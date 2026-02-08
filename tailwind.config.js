/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      colors: {
        cute: {
          blue: '#40C4FF',
          lightblue: '#B3E5FC',
          paleblue: '#E1F5FE',
        },
        pudgy: {
          navy: '#1a1a4e',
          deep: '#0D47A1',
          sky: '#87CEEB',
          ice: '#E8F4FD',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F5F9FF',
          card: '#FAFCFF',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'cute': '0 4px 20px rgba(64, 196, 255, 0.15)',
        'cute-lg': '0 8px 30px rgba(64, 196, 255, 0.25)',
        'soft': '0 2px 10px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'chunky': '0 4px 0 rgba(26, 26, 78, 0.12)',
        'chunky-lg': '0 6px 0 rgba(26, 26, 78, 0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Anja Eliane', 'system-ui', 'sans-serif'],
        heading: ['Anja Eliane', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'chunky': '1rem',
        'chunky-lg': '1.5rem',
      },
    },
  },
  plugins: [],
}
