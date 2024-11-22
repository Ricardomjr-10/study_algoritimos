function search (arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i
        }
    }
    return -1
}

console.log(search([1, 2, 3, 4, 5], 7))