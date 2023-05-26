module.exports = function (api) {
	api.cache(true);
	// api.cache.using(fn);
	// api.cache.forever();
	// api.cache.never();
	return {
		plugins: ['macros'],
	};
};
