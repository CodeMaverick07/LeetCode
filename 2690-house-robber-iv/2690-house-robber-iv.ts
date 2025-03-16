function minCapability(nums: number[], k: number): number {
    let n = nums.length 
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    function canRob(cap){ 
        let count = 0
        for (let i = 0; i<n; i++){
            if (nums[i]<=cap){
                count++
                i++
            }
        }
        return count >= k
    }
    while ( min < max) {
        let mid = Math.floor(min + (max-min)/2)
        if (canRob(mid)){
          max = mid
        } else {
        min = mid + 1
        }  
    }
    return min
};