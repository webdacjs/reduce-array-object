// Modules loaded for testing.
const arrObjReducer = require('./')

// Objects Array to test.
const countries = [
  { name: 'Colombia', code: 'co', area: 1197411 },
  { name: 'Argentina', code: 'ar', area: 2766890 },
  { name: 'Canada', code: 'ca', area: 9984670 },
  { name: 'Brasil', code: 'br', area: 8511965 }
]

test('Testing reducing default behaviour', () => {
  expect.assertions(4)
  const reduced = arrObjReducer(countries)
  expect(reduced['0'].name).toBe('Colombia')
  expect(reduced['1'].name).toBe('Argentina')
  expect(reduced['2'].code).toBe('ca')
  expect(reduced['3'].area).toBe(8511965)
})

test('Testing reducing using a key', () => {
  expect.assertions(4)
  const reduced = arrObjReducer(countries, {key: 'code'})
  expect(reduced.co.name).toBe('Colombia')
  expect(reduced.ar.name).toBe('Argentina')
  expect(reduced.ca.code).toBe('ca')
  expect(reduced.br.area).toBe(8511965)
})

test('Testing reducing using a key and value', () => {
  expect.assertions(4)
  const reduced = arrObjReducer(countries, {key: 'code', value: 'name'})
  expect(reduced.co).toBe('Colombia')
  expect(reduced.ar).toBe('Argentina')
  expect(reduced.ca).toBe('Canada')
  expect(reduced.br).toBe('Brasil')
})

test('Testing reducing using a custom key and value', () => {
  expect.assertions(4)
  const reduced = arrObjReducer(countries, {key: item => `iso3${item.code}`, value: 'name'})
  expect(reduced.iso3co).toBe('Colombia')
  expect(reduced.iso3ar).toBe('Argentina')
  expect(reduced.iso3ca).toBe('Canada')
  expect(reduced.iso3br).toBe('Brasil')
})

test('Testing reducing a numeric array. default behaviour', () => {
  expect.assertions(5)
  const reduced = arrObjReducer([0, 1, 2, 3, 4])
  expect(reduced['0']).toBe(0)
  expect(reduced['1']).toBe(1)
  expect(reduced['2']).toBe(2)
  expect(reduced['3']).toBe(3)
  expect(reduced['4']).toBe(4)
})

test('Testing passing an string (not supported, error)', () => {
  expect.assertions(1)
  expect(arrObjReducer('this is a string')).toBe('this is a string')
})

test('Testing passing an undefined (not supported, error)', () => {
  expect.assertions(1)
  expect(arrObjReducer()).toBeUndefined()
})
