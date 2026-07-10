function productExceptSelf(nums: number[]): number[] {
    let zeroCount = 0
    let total = 1
    let zeroIdx = -1
    for (let i = 0; i < nums.length; i++){
        if (nums[i]===0){
            zeroCount++
            zeroIdx = i
        }
    if (nums[i]!=0){
        total = total * nums[i]
    }
    }
    if (zeroCount >= 2){
        return Array(nums.length).fill(0)
    } else if (zeroCount == 1){
        let ans = new Array(nums.length).fill(0)
        ans[zeroIdx] = total
        return ans
    } else {
        for (let i = 0; i < nums.length; i++){
            nums[i] = total/ nums[i]
        }
    }
    return nums
};