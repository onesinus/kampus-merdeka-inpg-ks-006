function binarySearch(sortedData, dataToFind) {
    let lowest_index = 0
    let highest_index = sortedData.length - 1
    while (lowest_index <= highest_index) {
        const mid_index = Math.floor((lowest_index + highest_index) / 2)
        if (sortedData[mid_index] === dataToFind) {
            return mid_index
        } else if (sortedData[mid_index] < dataToFind) {
            lowest_index = mid_index + 1
        } else {
            highest_index = mid_index - 1
        }
    }
    return -1
}

// test cases
console.log(binarySearch([1, 3, 5, 7], 3)) // 1
console.log(binarySearch([1, 3, 5, 7], 5)) // 2
console.log(binarySearch([1, 3, 5, 7], 7)) // 3
console.log(binarySearch([1, 3, 5, 7], 17)) // -1