function maxProfit(prices: number[]): number {
    let min_price = prices[0]
    let max_profit = 0
    for (let i = 1; i < prices.length; i++){
        if (min_price > prices[i]){
            min_price = prices[i]
            continue;
        }
        max_profit = Math.max(max_profit,(prices[i]-min_price))
    }
    return max_profit
};