function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let ans = [];
    ans = Array(grid.length * grid[0].length + 1).fill(0);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let num = grid[i][j];
            ans[num] = ans[num] + 1;
        }
    }
    let res = [];
    for (let i = 1; i < ans.length; i++) {
        if (ans[i] === 0) {
            res[1] = i;
        } else if (ans[i] === 2) (
            res[0] = i
        )
    }
    return res;
};