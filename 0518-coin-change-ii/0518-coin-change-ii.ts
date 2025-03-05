function change(amount: number, coins: number[]): number {
    let n = coins.length;
    let dp = Array.from({ length: n }, () => new Array(amount + 1).fill(0));

   
    for (let i = 0; i < n; i++) {
        dp[i][0] = 1;
    }
    for (let i = 0; i <= amount; i++) {
        if (i % coins[0] === 0) {
            dp[0][i] = 1;
        }
    }
    for (let i = 1; i < n; i++) {
        for (let sum = 0; sum <= amount; sum++) {
            let pick = 0;
            if (sum >= coins[i]) {
                pick = dp[i][sum - coins[i]];
            }
            let notPick = dp[i - 1][sum];
            dp[i][sum] = notPick + pick;
        }
    }

    return dp[n - 1][amount];
}
// function change(amount: number, coins: number[]): number {
//     let memo: Map<string, number> = new Map(); 
//     return helper(coins, amount, coins.length - 1, memo);
// }

// function helper(coins, amount, idx, memo) {
//     let key = `${amount}-${idx}`;
//     if (memo.has(key)) return memo.get(key); 

//     if (idx == 0) {
//         if (amount % coins[idx] == 0) {
//             return 1;
//         } else {
//             return 0;
//         }
//     }

//     let pick = 0;
//     if (amount >= coins[idx]) {
//         pick = helper(coins, amount - coins[idx], idx, memo);
//     }
//     let notPick = helper(coins, amount, idx - 1, memo);

//     memo.set(key, pick + notPick); 
//     return pick + notPick;
// }