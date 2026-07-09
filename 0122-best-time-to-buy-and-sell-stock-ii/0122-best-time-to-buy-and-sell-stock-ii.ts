function maxProfit(prices: number[]): number {
    let profit = 0;
    let buyPrice = prices[0]
    for (let i = 1; i < prices.length; i++){
        if (buyPrice > prices[i]){
            buyPrice = prices[i]
        } else if (buyPrice < prices[i]){
            profit = profit + (prices[i]-buyPrice)
            buyPrice = prices[i]
        }
    }
    return profit
};