/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let steps = k%nums.length;
    let copy = [...nums]
    for (let i = 0; i < nums.length; i++){
        nums[(i+steps)%nums.length] = copy[i]
    }
};