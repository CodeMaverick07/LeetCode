function majorityElement(nums: number[]): number {
    let map: Map<number,number> = new Map()
    for (let i = 0; i < nums.length; i++){
        if (!map.has(nums[i])){
            map.set(nums[i],1)
        } else {
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
   
    let ans = 0
    let large = 0
    for(let [key,val] of map){
        if (val > large){
            ans = key
            large = val
        }
    }
    return ans
};