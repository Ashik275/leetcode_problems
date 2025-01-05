function mergeAndSort(list1, list2) {
    // Concatenate both lists
    list1 = list1.concat(list2);

    // Bubble Sort implementation with if-else to sort the array
    for (let i = 0; i < list1.length; i++) {
        // Go through the array from the start to the unsorted part
        for (let j = 0; j < list1.length - i - 1; j++) {
            // Compare adjacent elements
            if (list1[j] > list1[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = list1[j];
                list1[j] = list1[j + 1];
                list1[j + 1] = temp;
            }
        }
    }

    // Return the sorted array
    return list1;
}

// Example usage:
var list1 = [1, 3, 4];
var list2 = [1, 2, 4];
var sortedList = mergeAndSort(list1, list2);

console.log(sortedList);  
