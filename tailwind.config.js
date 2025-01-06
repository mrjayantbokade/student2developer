/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			backgroundBlackOG: '#100e0e',
  			backgroundBlack: '#19191a',
  			darkGray: '#232325',
  			darkerGray: '#0a0a0a',
  			pinkHighlight: '#ef097c',
  			pinkLittleRectangle: '#CA2B58',
  			grayText: '#aaaaaa',
  			roseMain: '#f43f5e'
  		},
  		fontFamily: {
  			sora: [
  				'Sora',
  				'sans-serif'
  			],
  			popins: [
  				'Poppins',
  				'sans-serif'
  			],
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

