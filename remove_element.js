function removeElement(nums, val) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        }
    }

    return count;
}

// Example usage:
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

let k = removeElement(nums, val);
console.log(k);  // Output: 5
console.log(nums.slice(0, k));