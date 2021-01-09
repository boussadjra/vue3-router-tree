module.exports = {
	purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts','./src/**/*.tsx','./src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'p-indigo': {
					100: '#d6cfe2',
					200: '#ad9ec5',
					300: '#846ea7',
					400: '#5b3d8a',
					500: '#320d6d',
					600: '#280a57',
					700: '#1e0841',
					800: '#14052c',
					900: '#0a0316',
				},
				melon: {
					100: '#fff2f1',
					200: '#ffe5e2',
					300: '#ffd9d4',
					400: '#ffccc5',
					500: '#ffbfb7',
					600: '#cc9992',
					700: '#99736e',
					800: '#664c49',
					900: '#332625',
				},
			},
			transitionProperty: {
				height: 'height',
			},
		},
	},
	variants: {},
	plugins: [],
};
