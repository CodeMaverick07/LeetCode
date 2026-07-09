function maxProfit(prices: number[]): number {
    //<------------------------ DP_Solution ------------------------>
    // let dp = Array.from({length:prices.length},()=>Array(prices.length).fill(0))
    // let ans = 0
    // for (let i = 0; i < prices.length; i++){
    //     for (let j = i; j < prices.length; j++){
    //         dp[i][j] = prices[j]-prices[i]
    //         if (dp[i][j] > ans ){
    //             ans = dp[i][j]
    //         }
    //     }
    // }
    // return ans
    //<------------------------ DP_Solution ------------------------>
    let min_price = prices[0]
    let max_profit = 0
    for (let i = 1; i < prices.length; i++){
        if (min_price > prices[i]){
            min_price = prices[i]
            continue;
        }
        let profit = prices[i]-min_price
        max_profit = Math.max(max_profit,profit)
    }
    return max_profit

};