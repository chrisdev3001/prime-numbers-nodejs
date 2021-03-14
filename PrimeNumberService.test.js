const { isPrime } = require('./PrimeNumberService')

test('It must return true if is prime number', () => {
	expect(isPrime(7)).toBe(true)
})

test('It must return false if is not prime number', () => {
	expect(isPrime(6)).toBe(false)
})