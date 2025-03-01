function applyOperations(nums: number[]): number[] {
    let i = 0;
    let j = 0;

    while(i < nums.length) {
        if(nums[i] === nums[i+1]) {
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }
        i++;
    }
    i = 0
    while(i < nums.length) {
        if(nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;   
        }
        i++;
    }
    
    return nums;
};
