/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k%nums.length
     const rotated = [
        ...nums.slice(nums.length - k),
        ...nums.slice(0, nums.length - k)
    ];

    for (let i = 0; i<nums.length; i++){
        nums[i] = rotated[i]
    }
};