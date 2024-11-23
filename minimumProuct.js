function minimoProduto (arr) {
    let min = 1
    for (let i = 0; i < arr.length; i++) {
        min *= arr[i]
}
return min
}
console.log(minimoProduto([1, 2, 3, 4, 5]))