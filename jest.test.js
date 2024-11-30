const findMaxVal = require('./maximizeArray')

test('findMaxVal', () => {
    expect(findMaxVal([2, 1, 7], 3, 3, 7)).toBe(7)
})