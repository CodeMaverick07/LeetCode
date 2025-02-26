function maxAbsoluteSum(nums: number[]): number {
    let max = -Infinity 
    let min = +Infinity 
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i< nums.length; i++){
        sum1 += nums[i]
        if (sum1 > max){
            max = sum1
        }
        if (sum1 < 0){
            sum1 = 0
        }
    }
    for (let i = 0; i< nums.length; i++){
        sum2 += nums[i]
        if (sum2< min){
            min = sum2
        }
        if (sum2 > 0){
            sum2 = 0
        }
    }
    return Math.max(max,Math.abs(min))
};