function jump(nums: number[]): number {
    let jumps = 0;
    let currentEnd = 0;
    let far = 0;
    
    for (let i = 0; i < nums.length-1; i++){
        far = Math.max(far,i+nums[i])
        if (i === currentEnd){
            jumps++
            currentEnd = far
        }
    }
    return jumps
};