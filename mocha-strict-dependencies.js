const expect = require('chai').expect;

module.exports = function(whitelistedPackages = []) {
	describe('check version in package.json', () => {

		const packageJson = require(process.cwd() + '/package.json');
		const deps = Object.assign({}, packageJson.dependencies, packageJson.devDependencies);

		for(let dependency in deps) {
			const version = deps[dependency];
			if (whitelistedPackages.indexOf(dependency) !== -1) {
				it(`${dependency} should have unfixed version`, () => {
					expect(version).to.not.match(/#[a-z0-9\.]{6,8}/);
				});
			} else {
				it(`${dependency} should have fixed version`, () => {
					if (version.indexOf('git@github.com') !== -1) {
						expect(version).to.match(/#[a-z0-9\.]{6,8}/);
						return;
					}
					expect(version).to.not.contain('^');
					expect(version).to.not.contain('~');
					expect(version).to.not.contain('*');
				});
			}
		}
	});
};