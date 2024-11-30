const {findMaxVal, binarySearch }= require('./maximizeArray')

test('findMaxVal', () => {
    expect(findMaxVal([2, 1, 7], 3, 3, 7)).toBe(7)
})

test('binarySearch', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0)
})
