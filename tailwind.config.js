/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'dark': '#221E22',
      'gray': '#F4F4F4',
      'light': '#FDFDFD',
      'cream': '#FFFEF6',
      'primary': '#4F5944',
      'primary-light': '#728560',
      'secondary': '#FFB704',
      'secondary-light': '#FFD670'
    }
  },
  plugins: [],
}
