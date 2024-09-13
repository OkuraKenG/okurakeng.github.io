module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	important: '#root',
	theme: {
		extend: {
			boxShadow: {
				'custom': '0px 0px 25px 10px rgba(55, 182, 255, 0.56)',
				'custom-yellow': '0px 0px 25px 10px rgba(255, 205, 85, 0.56)',
				'custom-blue': '0px 0px 25px 10px rgba(150, 190, 255, 0.56)'
			},
			screens: {
				sm: '600px',
				md: '900px',
				lg: '1200px',
				xl: '1536px',
			},
		},
	},
	corePlugins: {
		// Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
		preflight: false,
	},
	plugins: [],
};
