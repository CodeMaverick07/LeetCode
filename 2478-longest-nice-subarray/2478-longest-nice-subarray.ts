function longestNiceSubarray(nums: number[]): number {
    let n = nums.length;
    let left = 0, right = 0;
    let xorCount = 0;
    let subCount = 0;

    while (right < n) {
        while ((xorCount & nums[right]) !== 0) {
            xorCount ^= nums[left];
            left++;
        }

        xorCount |= nums[right];
        subCount = Math.max(subCount, right - left + 1);
        right++;
    }

    return subCount;
}