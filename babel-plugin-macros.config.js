module.exports = {
	cacheDirectory: true,
	'fontawesome-svg-core': {
		license: 'free',
	},
	styledComponents: {
		pure: true,
		displayName: true,
		fileName: true,
	},
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime', 'macros'],
	env: {
		development: {
			plugins: [
				[
					'react-refresh/babel',
					{
						skipEnvCheck: true,
					},
				],
			],
		},
	},
};
