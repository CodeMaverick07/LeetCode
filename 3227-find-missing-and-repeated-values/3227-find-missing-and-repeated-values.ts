function findMissingAndRepeatedValues(grid: number[][]): number[] {
   let n = grid.length;
    let size = n * n;
    let count = new Map<number, number>();
    for (let row of grid) {
        for (let num of row) {
            count.set(num, (count.get(num) || 0) + 1);
        }
    }

    let repeating = -1, missing = -1;
    for (let i = 1; i <= size; i++) {
        if (count.has(i)) {
            if (count.get(i) === 2) repeating = i; 
        } else {
            missing = i; 
        }
    }

    return [repeating, missing]; 
};