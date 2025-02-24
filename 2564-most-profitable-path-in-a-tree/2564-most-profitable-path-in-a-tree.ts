function mostProfitablePath(edges: number[][], bob: number, amount: number[]): number {
    const n = amount.length;
    const tree: number[][] = Array.from({ length: n }, () => []);
    
    // Build adjacency list representation of the tree
    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }
    
    // Step 1: Find Bob's path to root (0) and mark times
    const bobTime = new Array(n).fill(Infinity);
    function findBobPath(node: number, parent: number, time: number): boolean {
        bobTime[node] = time;
        if (node === 0) return true;
        for (const neighbor of tree[node]) {
            if (neighbor !== parent && findBobPath(neighbor, node, time + 1)) {
                return true;
            }
        }
        bobTime[node] = Infinity; // Reset if not in path
        return false;
    }
    findBobPath(bob, -1, 0);
    
    // Step 2: DFS for Alice's traversal, maximizing profit
    let maxProfit = -Infinity;
    function dfs(node: number, parent: number, time: number, profit: number): void {
        // Profit handling based on Alice and Bob's arrival times
        if (time < bobTime[node]) {
            profit += amount[node]; // Alice arrives first, takes full amount
        } else if (time === bobTime[node]) {
            profit += Math.floor(amount[node] / 2); // Split if simultaneous
        }
        // If Bob arrives first, Alice gets nothing
        
        // If leaf node, update max profit
        if (tree[node].length === 1 && node !== 0) {
            maxProfit = Math.max(maxProfit, profit);
            return;
        }
        
        // DFS traversal
        for (const neighbor of tree[node]) {
            if (neighbor !== parent) {
                dfs(neighbor, node, time + 1, profit);
            }
        }
    }
    dfs(0, -1, 0, 0);
    
    return maxProfit;
}