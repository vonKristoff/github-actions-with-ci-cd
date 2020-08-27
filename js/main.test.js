const main = require('./main')

test('add', () => {
  expect(main.add(1, 3)).toEqual(4)
})

test('subtract', () => {
  expect(main.subtract(3, 1)).toEqual(2)
})

test('isPositive is true', () => {
  const [sum, isPositive] = main.isPositive(main.subtract(10, 5))
  expect(isPositive).toBeFalsy()
})

test('isPositive is false', () => {
  const [sum, isPositive] = main.isPositive(main.subtract(25, 15))
  expect(isPositive).toBeFalsy()
})