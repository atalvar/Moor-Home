/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vintage: {
          50: '#FAF7F0',
          100: '#F5E6D3',
          200: '#E8D5B7',
          300: '#D4AF37',
          400: '#B8860B',
          500: '#8B4513',
          600: '#654321',
          700: '#4A2C17',
          800: '#2D1810',
          900: '#1A0E08',
        },
        forest: {
          50: '#F0F4F0',
          100: '#D4E4D4',
          200: '#A8C8A8',
          300: '#7CAB7C',
          400: '#508E50',
          500: '#2D5016',
          600: '#234012',
          700: '#19300E',
          800: '#0F200A',
          900: '#051006',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};