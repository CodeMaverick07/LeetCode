function pivotArray(nums: number[], pivot: number): number[] {
    let small: number[] = [];
    let pivots: number[] = [];
    let large: number[] = [];

    for (let num of nums) {
        if (num < pivot) small.push(num);
        else if (num > pivot) large.push(num);
        else pivots.push(num); 
    }

    return [...small, ...pivots, ...large]; 
}