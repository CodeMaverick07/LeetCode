function minOperations(nums: number[]): number {
    let n = nums.length;
    let count = 0;

    for (let i = 0; i <= n - 3; i++) {
        if (nums[i] === 0) {
            nums[i] ^= 1;
            nums[i + 1] ^= 1;
            nums[i + 2] ^= 1;
            count++;
        }
    }
    for (let num of nums) {
        if (num === 0) return -1;
    }
    return count;
}