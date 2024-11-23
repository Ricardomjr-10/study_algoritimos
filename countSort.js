const array = [2, 5, 3, 0, 2, 3, 0, 3]

countArray = new Array(Math.max(...array) + 1).fill(0)


console.log(countArray)