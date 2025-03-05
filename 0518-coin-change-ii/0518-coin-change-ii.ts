function change(amount: number, coins: number[]): number {
    let memo: Map<string, number> = new Map(); // ✅ Use a map to store computed results
    return helper(coins, amount, coins.length - 1, memo);
}

function helper(coins: number[], amount: number, idx: number, memo: Map<string, number>): number {
    if (amount === 0) return 1; // ✅ If amount becomes 0, there's one valid way to make the change
    if (idx < 0) return 0; // ✅ If no coins left, no way to make change
    if (memo.has(`${amount}-${idx}`)) return memo.get(`${amount}-${idx}`)!; // ✅ Memoization check

    let pick = 0;
    if (amount >= coins[idx]) {
        pick = helper(coins, amount - coins[idx], idx, memo); // ✅ Use same coin again (unlimited supply)
    }

    let notPick = helper(coins, amount, idx - 1, memo); // ✅ Skip current coin

    memo.set(`${amount}-${idx}`, pick + notPick); // ✅ Store result in memo
    return pick + notPick;
}