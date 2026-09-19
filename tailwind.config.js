/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-primary': '#063B63',
        'navy-dark': '#002542',
        'cyan-accent': '#159BD7',
        'cyan-hover': '#0d82b8',
        'azure-light': '#DCEFF8',
        'surface-bg': '#F6F9FF',
        'alt-bg': '#F5F8FA',
        'slate-body': '#172B3A',
        'muted-text': '#42474E',
        'border-line': '#E1EBF2',
      },
      fontFamily: {
        headline: ['Oswald', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'asymmetric': '4px 32px 4px 4px',
      },
      boxShadow: {
        'hover-card': '0 12px 32px -4px rgba(6, 59, 99, 0.12)',
        'modal-depth': '0 24px 48px -8px rgba(0, 37, 66, 0.35)',
      }
    },
  },
  plugins: [],
}
