function binarySearch (arr, x) {
    let low = 0
    let mid = 0
    let high = arr.length -1
    while (low <= high) {
        mid = Math.floor((low + high) / 2)
    }
    if (arr[mid] === x) {
        return mid
    }
    if (arr[mid] < x) {
        return binarySearch(arr.slice(mid + 1), x)
    }
    if (arr[mid] > x) {
        return binarySearch(arr.slice(0, mid), x)
    }
    return -1
}

let result = binarySearch([1, 2, 3, 4, 5], 5)
if (result === -1) {
    console.log('Nao encontrado')
} else {
    console.log('Encontrado na posicção' + result)
}