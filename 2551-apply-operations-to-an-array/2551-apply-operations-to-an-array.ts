function applyOperations(nums: number[]): number[] {
    let n = nums.length;

    // Step 1: Apply operations to merge equal adjacent numbers
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    // Step 2: Move all zeros to the end while maintaining order
    let result: number[] = [];
    let zeroCount = 0;

    for (let num of nums) {
        if (num !== 0) {
            result.push(num);
        } else {
            zeroCount++;
        }
    }

    // Append zeros at the end
    while (zeroCount--) {
        result.push(0);
    }

    return result;
}

// Example Usage:
console.log(applyOperations([1, 2, 2, 1, 1, 0])); // Output: [1, 4, 2, 0, 0, 0]