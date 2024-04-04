/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      },
      colors: {
        // Define your custom light and dark mode colors
        'bg-primary': 'var(--color-bg-primary)',
        'text-primary': 'var(--color-text-primary)',
        // Add more custom color variables
      },
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
  },
  plugins: [],
}

