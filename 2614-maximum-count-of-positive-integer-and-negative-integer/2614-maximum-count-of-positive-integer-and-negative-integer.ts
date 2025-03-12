function maximumCount(nums: number[]): number {
    let belowZero = 0;
    let aboveZero = 0;
    for (let num of nums) {
        if (num < 0) {
            belowZero++;
        } else if (num > 0) {
            aboveZero++;
        }
    }
    return Math.max(belowZero, aboveZero);
};