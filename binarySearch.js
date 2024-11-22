function binarySearch (arr, x) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] < x) {
            low = mid + 1
        } else if (arr[mid] > x) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}