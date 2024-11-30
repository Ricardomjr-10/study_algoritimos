
let ans = 0

function maximizeArray(arr, n, num, maxLimit, ind) {
    if (ind == n) {
        ans = Math.max(ans, num)
        return
    }

    if (num - arr[ind] >= 0) {
        maximizeArray(arr, n, num - arr[ind], maxLimit, ind + 1)
    }

    if (num + arr[ind] <= maxLimit) {
        maximizeArray(arr, n.num + arr[ind], maxLimit, ind + 1)
    }
}

function findMaxVal(arr, n, num, maxLimit) {
    let ind = 0
    maximizeArray(arr, n, num, maxLimit, ind)
    return ans
}




