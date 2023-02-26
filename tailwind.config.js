/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
			'primary-light': '#F7F8FC',
			'secondary-light': '#FFFFFF',
			'ternary-light': '#f6f7f8',

			'primary-dark': '#0D2438',
			'secondary-dark': '#102D44',
			'ternary-dark': '#1E3851',
		},	
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '5rem',
				xl: '6rem',
				'2xl': '8rem',
			},
		},
    },
  },
  plugins: [],
}
