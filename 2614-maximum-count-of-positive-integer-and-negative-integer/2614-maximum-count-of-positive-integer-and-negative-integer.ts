function maximumCount(nums: number[]): number {
    let positive = 0
    let negative = 0
    for (let i = 0; i<nums.length; i++){
        if (nums[i]>0){
            positive++
        } 
         if (nums[i]<=-1){
            negative++
        }
    }
    return Math.max(positive,negative)
};