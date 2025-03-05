function change(amount: number, coins: number[]): number {
    let memo: Map<string, number> = new Map(); // ✅ Added memoization map
    return helper(coins, amount, coins.length - 1, memo);
}

function helper(coins, amount, idx, memo) {
    let key = `${amount}-${idx}`;
    if (memo.has(key)) return memo.get(key); // ✅ Check memoized result

    if (idx == 0) {
        if (amount % coins[idx] == 0) {
            return 1;
        } else {
            return 0;
        }
    }

    let pick = 0;
    if (amount >= coins[idx]) {
        pick = helper(coins, amount - coins[idx], idx, memo);
    }
    let notPick = helper(coins, amount, idx - 1, memo);

    memo.set(key, pick + notPick); // ✅ Store result in memo
    return pick + notPick;
}