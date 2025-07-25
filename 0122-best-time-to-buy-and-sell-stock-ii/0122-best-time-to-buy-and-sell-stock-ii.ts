function maxProfit(prices: number[]): number {
    let profit = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++){
        console.log(min)
        if (min > prices[i]){
            min = prices[i]
        }else{
            profit = profit + prices[i] - min
            min = prices[i]
        }

    }
    return profit
};