function coinChange(coins: number[], amount: number): number {
    let memo: Map<string, number> = new Map();

    function helper(coins: number[], amount: number, idx: number): number {
        if (amount == 0) return 0; // ✅ Base case: No coins needed
        if (idx < 0 || amount < 0) return Infinity; // ✅ Invalid case
        
        let key = `${amount}-${idx}`;
        if (memo.has(key)) return memo.get(key)!; // ✅ Memoization

        let pick = Infinity;
        if (amount >= coins[idx]) {
            pick = 1 + helper(coins, amount - coins[idx], idx); // Take one coin and stay at the same index
        }

        // ✅ Not picking the coin (move to the next coin)
        let notPick = helper(coins, amount, idx - 1);

        let result = Math.min(pick, notPick); // ✅ Find the minimum
        memo.set(key, result);
        return result;
    }

    let res = helper(coins, amount, coins.length - 1);
    return res === Infinity ? -1 : res; // ✅ If `Infinity`, no solution exists
}
