function divideArray(nums: number[]): boolean {
    let n = nums.length
    let map = new Map()
    let isEven = true

    for (let num of nums){
        if (!map.get(num)){
            map.set(num,1)
        } else {
            map.set(num,map.get(num)+1)
        }
    }
    for (let [key,value] of map){
         if (value%2!=0){
          isEven = false
          break
         }
    }
    return isEven
};