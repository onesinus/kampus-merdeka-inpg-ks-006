// Reference: https://visualgo.net/en/sorting?slide=1-2
function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        let idx_smallest_number = i
        for (let j = i + 1; j < data.length; j++) {
            // console.log(data[idx_smallest_number], " > ", data[j]);
            if (data[idx_smallest_number] > data[j]) {
                idx_smallest_number = j
            }
        }
        // proses swap (pertukaran data)
        const temp_data_i = data[i]
        data[i] = data[idx_smallest_number]
        data[idx_smallest_number] = temp_data_i

        // console.log(data)
    }
    return data
}

const data = [4, 5, 2, 1, 0, 3]
const sorted_data = selectionSort(data)
console.log(sorted_data) // [0, 1, 2, 3, 4, 5]

// Test Cases
console.log(selectionSort([104, 94, 201, 43]))
console.log(selectionSort([27, 38, 4, 43, 9, 82, 10]))

/* Yang terjadi di dalam looping */
/*
    4  >  5
    4  >  2
    2  >  1
    1  >  0
    0  >  3
    [ 0, 5, 2, 1, 4, 3 ]

    5  >  2
    2  >  1
    1  >  4
    1  >  3
    [ 0, 1, 2, 5, 4, 3 ]

    2  >  5
    2  >  4
    2  >  3
    [ 0, 1, 2, 5, 4, 3 ]

    5  >  4
    4  >  3
    [ 0, 1, 2, 3, 4, 5 ]

    4  >  5
    [ 0, 1, 2, 3, 4, 5 ]
    [ 0, 1, 2, 3, 4, 5 ]
    [ 0, 1, 2, 3, 4, 5 ]
*/