# mocha-strict-dependencies [![Build Status](https://travis-ci.org/debitoor/mocha-strict-dependencies.svg?branch=master)](https://travis-ci.org/debitoor/mocha-strict-dependencies)
Mocha test, that checks that you have strict dependencies on your package.json, except of whitelisted

#Usage
```bash
npm i -D -E @debitoor/mocha-strict-dependencies
echo "require('@debitoor/mocha-strict-dependencies')([]);" > test/strict-dependencies.spec.js
```
#Configuration
```js
const listOfPackagesThatShouldHaveUnfixedVersion = [
  'deep-extend',
  'chai'
];
require('@debitoor/mocha-strict-dependencies')(listOfPackagesThatShouldHaveUnfixedVersion)
```
