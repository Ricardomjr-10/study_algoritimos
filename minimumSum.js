const array = [3,4]

function minimumSum (arr) {
    arr.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sum += arr[i]
        } else {
            sum += arr[i] * 10
        }
    }
    return sum
}
console.log(minimumSum(array))