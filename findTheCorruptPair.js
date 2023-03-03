function findCorruptPair(nums) {
    // Initialize missing and duplicated
    let missing = null;
    let duplicated = null;

    //  Function for swapping
    function swap(arr, first, second) {
        [arr[first], arr[second]] = [arr[second], arr[first]];
    }
    // Apply cyclic sort on the array

    let i = 0;
    // Traversing the whole array
    while (i < nums.length) {
        // Determining what position the specific element should be at
        let correct = nums[i] - 1;
        // Check if the number is at wrong position
        if (nums[i] != nums[correct]) {
            // Swapping the number to it's correct position
            swap(nums, i, correct);
        } else {
            i += 1;
        }
    }

    // Finding the corrupt pair(missing, duplicated)
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != j + 1) {
            duplicated = nums[j];
            missing = j + 1;
        }
    }
    return [missing, duplicated];
}