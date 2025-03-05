function coloredCells(n: number): number {
    let curr = 1
for (let i = 1; i<n; i++){
    curr = curr + 4*i
}
return curr
};
