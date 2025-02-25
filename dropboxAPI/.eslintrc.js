module.exports = {
	root: true,
	extends: ['eslint-config-semistandard', 'prettier'],
	globals: {
		browser: true,
		should: true,
		assert: true,
		describe: true,
		beforeEach: true,
		afterEach: true,
		it: true,
		expect: true,
		$: true,
		$$: true
	}
};
