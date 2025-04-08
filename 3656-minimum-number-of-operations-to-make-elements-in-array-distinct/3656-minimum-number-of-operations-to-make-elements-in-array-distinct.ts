var minimumOperations = function(nums) {
    const seen = new Set(); // chakra detector

    for (let i = nums.length - 1; i >= 0; i--) {
        if (seen.has(nums[i])) {
            // Repeat chakra detected → calculate removal ops
            return Math.floor((i + 3) / 3);
        }
        seen.add(nums[i]);
    }

    return 0; // all chakra are distinct
};