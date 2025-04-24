var countCompleteSubarrays = function(nums) {
    const totalDistinct = new Set(nums).size;
    const count = new Map();
    let left = 0, res = 0;

    for (let right = 0; right < nums.length; right++) {
        count.set(nums[right], (count.get(nums[right]) || 0) + 1);

        while (count.size === totalDistinct) {
            res += nums.length - right;
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) {
                count.delete(nums[left]);
            }
            left++;
        }
    }

    return res;
};