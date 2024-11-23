const array = [5, 6, 1, 3]
let temp 

for (let i =0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j]
            array[j] = array[j + 1]
            array[j + 1] = temp
        }
    }
}