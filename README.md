# reduce-array-object

reduce-array-object is a small module to reduce arrays to objects supporting customized parameters. You can pass a numeric array or an array of objects and define what parater to use as key or value (default key: index, default value: item)

## Install

You can install with [npm]:

```sh
$ npm install --save reduce-array-object
```

## Usage

Please check the `index.test.js` to get a full list of examples but a typical use case in the following:

```js

// Array of objects with country data.

const countries = [
  { name: 'Colombia', code: 'co', area: 1197411 },
  { name: 'Argentina', code: 'ar', area: 2766890 },
  { name: 'Canada', code: 'ca', area: 9984670 },
  { name: 'Brasil', code: 'br', area: 8511965 }
]

// Importing this module
const arrObjReducer = require('reduce-array-object')

// Reduce using the country code as key and the name as value.
const reduced = arrObjReducer((countries, {key: 'code', value: 'name'}))

// output: { co: 'Colombia', ar: 'Argentina', ca: 'Canada', br: 'Brasil' }

```

In conclusion the first parameter is the `array` to reduce and the second parameter is a configuration `object` where you can optionally define the `key` and `value` parameters to be used in the resulting object.

### Running tests

You can run the tests and check the functionality of this module using:

```sh
$ npm test
```

### License

Copyright © 2020, [Juan Convers](https://juanconvers.com).
Released under the [MIT License](LICENSE).