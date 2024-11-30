const findMaxVal= require('./maximizeArray')
const binarySearch = require('./binarySearch')
const bubbleSort = require('./bubbleSort')

test('findMaxVal', () => {
    expect(findMaxVal([2, 1, 7], 3, 3, 7)).toBe(7)
})

test('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
})

test('bubbleSort', () => {
    expect(bubbleSort([7, 5, 6, 1, 3])).toEqual([1, 3, 5, 6, 7])
})