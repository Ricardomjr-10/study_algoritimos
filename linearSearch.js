function search (arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i
        }
    }
    return -1
}

let result = search([1, 2, 3, 4, 5], 5)
if (result === -1) {
    console.log("Not found")
} else {
    console.log('Found at index ' + result)
}
