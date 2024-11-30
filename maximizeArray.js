const array = [2, 1, 7]
const number = 3
const maxValue = 7

function maximizeArray (arr, number, maxValue) {
    const n = arr.length
    const dp = new Array(n).fill(0).map(() => {
        return new Array(maxValue + 1).fill(0)
    })

    if (0 <= number + arr[0] && number + arr[0] <= maxValue) {
        dp[0][number + arr[0]] = 1
    }
    if (0 <= number - arr[0] && number - arr[0] <= maxValue) {
        dp[0][number - arr[0]] = 1
    }

    

}