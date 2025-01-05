function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    
    }
    return arr;
}
function findMedianSortedArrays(arr1, arr2) {
    let combined_array = bubbleSort(arr1.concat(arr2));
    let array_length = combined_array.length;

    if (array_length % 2 !== 0) {
        let middleIndex = Math.floor(array_length / 2);
        return combined_array[middleIndex];
    }
    let middleIndex1 = array_length / 2 - 1;
    let middleIndex2 = array_length / 2;
    return (combined_array[middleIndex1] + combined_array[middleIndex2]) / 2;
}

let arr1 = [1, 3];
let arr2 = [2,4];

let result = findMedianSortedArrays(arr1, arr2);

console.log(result);