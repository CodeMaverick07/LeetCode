function pivotArray(nums: number[], pivot: number): number[] {
    const ans = []
    for(const n of nums) if(n < pivot) ans.push(n)
    for(const n of nums) if(n === pivot) ans.push(n)
    for(const n of nums) if( n > pivot) ans.push(n)
    return ans
};