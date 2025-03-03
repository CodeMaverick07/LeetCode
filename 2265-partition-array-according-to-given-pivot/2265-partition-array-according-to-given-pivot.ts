function pivotArray(nums: number[], pivot: number): number[] {
    let n = nums.length
       let index = nums.indexOf(pivot)
       let small = []
       let arr = []
       let large = []
    for (let i = 0; i < n; i++){
          if (nums[i] == pivot){
            arr.push(pivot)
          }
          if (nums[i]<pivot){
            small.push(nums[i])
          }
          if (nums[i]>pivot){
            large.push(nums[i])
          }
    }
    
    small = small.concat(arr)
    small = small.concat(large)
    return small
};