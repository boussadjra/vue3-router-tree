module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/vue-router-tree/' : '/',
	configureWebpack: {
		output: {
			libraryExport: 'default',
		},
	},
	css: {
		extract: false,
	},
};
