function numOfSubarrays(nums: number[]): number {
    const MOD = 1_000_000_007;
    const n = nums.length;

    let count = 0;
    let prefix = 0;
    let oddCount = 0;
    let evenCount = 1;

    for (let i = 0; i < n; i++) {
        prefix += nums[i];

        if (prefix % 2 === 0) {
            count = (count + oddCount) 
            evenCount++;
        } else {
            count = (count + evenCount) 
            oddCount++;
        }
    }

    return count;    
};

