const array = [3,4]
const arrayA = [2, 4, 1, 3]

function minimumSum (arr) {
    let arrayb = []
    let sum = 0
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < arr[i + 1]) {
            arrayb.push(arr[i])
            sum += arr[i]
    }
    
}

return sum
}
console.log(minimumSum(arrayA))