/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E293B', // Deep Indigo / Dark Slate
          light: '#334155',
          dark: '#0F172A',
        },
        accent: {
          DEFAULT: '#10B981', // Emerald Green
          light: '#34D399',
          dark: '#059669',
        },
        background: '#F8FAFC', // Soft Gray / Cool White
        text: {
          primary: '#111827', // Charcoal
          secondary: '#64748B', // Slate Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

