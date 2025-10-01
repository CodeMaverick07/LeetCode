function intersection(nums1: number[], nums2: number[]): number[] {
    const set = new Set(nums2);
    const set2 = new Set(nums1);
    for (let item of set) {
         if (!set2.has(item)){
            set.delete(item);
        }
    }  
    return [...set]
};