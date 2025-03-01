function applyOperations(nums: number[]): number[] {
    let n = nums.length
    for (let i = 1; i < n; i++){
        if (nums[i-1]===nums[i]){
            nums[i-1] = nums[i-1]*2
            nums[i] = 0
        }
    }
    let i = 0
    
    while(i<n){
        let j = i+1
    if (nums[i]==0){
        while (j<n && nums[j]=== 0){
            j++
        }
        if (j<n){
            let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
        }
        
    }
    i++
    }
    return nums
};