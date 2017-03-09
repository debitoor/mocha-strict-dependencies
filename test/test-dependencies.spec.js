describe('should have fixed versions of this package.json, except of deep-extend and cnf', () => {
	require('../mocha-strict-dependencies')(['deep-extend']);
});
