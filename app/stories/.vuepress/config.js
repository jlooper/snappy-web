module.exports = {
	title: 'Snappy Squirrel',
	description: 'Personal Finance E-books for Parents and Kids',
	postcss: {
		plugins: [require('autoprefixer'), require('tailwindcss')('./tailwind.config.js')],
	},
	themeConfig: {
		search: false,
	},
};
