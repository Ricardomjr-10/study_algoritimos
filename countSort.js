
function countingSort(array) {
    let max = Math.max(...array);
    let countArray = new Array(max + 1).fill(0);
    let outputArray = new Array(array.length).fill(0);

    for (let i = 0; i < array.length; i++) {
        countArray[array[i]]++;
    }

    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i--) {
        outputArray[countArray[array[i]] - 1] = array[i];
        countArray[array[i]]--;
    }

    return outputArray;
}

const array = [2, 5, 3, 0, 2, 3, 0, 3];
console.log(countingSort(array));

module.exports = countingSort
