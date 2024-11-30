const findMaxVal= require('./maximizeArray')
const binarySearch = require('./binarySearch')
const bubbleSort = require('./bubbleSort')
const countingSort = require('./countSort')
const search = require('./linearSearch')
const minimumSum = require('./minimumSum')

test('findMaxVal', () => {
    expect(findMaxVal([2, 1, 7], 3, 3, 7)).toBe(7)
})

test('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
})

test('bubbleSort', () => {
    expect(bubbleSort([7, 5, 6, 1, 3])).toEqual([1, 3, 5, 6, 7])
})

test('countingSort', () => {
    expect(countingSort([2, 5, 3, 0, 2, 3, 0, 3])).toEqual([0, 0, 2, 2, 3, 3, 3, 5])
})

test('search', () => {
    expect(search([1, 2, 3, 4, 5], 5)).toBe(4)
})

test('minimumSum', () => {
    expect(minimumSum([3, 4])).toBe(3)
})
