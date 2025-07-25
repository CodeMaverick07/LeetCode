function majorityElement(nums: number[]): number {
    let map = new Map()
    let ans = {value:-1,val:-1}
    for (let i = 0; i<nums.length; i++){
        if (!map.has(nums[i])){
            map.set(nums[i],1)
        } 
        else {
            map.set(nums[i],map.get(nums[i])+1)
        }
    }
   for(const x of map.entries()){
    if (ans.val < x[1]){
        ans.val = x[1]
        ans.value = x[0]
    }
   }
   return ans.value
};